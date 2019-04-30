using System;
using System.Diagnostics;
using System.IO;
using HRM.Persistence.SeedingData;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HRM.WebAPI
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var webHostBuilder = CreateWebHostBuilder(args).Build();

            // Seeding Data
            RundSeeding(webHostBuilder);

            // Run Web Host Builder.
            webHostBuilder.Run();
        }

        public static IWebHostBuilder CreateWebHostBuilder(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                //.UseKestrel()
                //.UseContentRoot(Directory.GetCurrentDirectory())
                //.UseIISIntegration()
                //.UseApplicationInsights()
                .ConfigureAppConfiguration(CustomAppConfiguration)
                .UseStartup<Startup>()
                .ConfigureLogging((hostingContext, loggingBuilder) => {
                    loggingBuilder.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    loggingBuilder.AddConsole();
                    loggingBuilder.AddDebug();

                    //loggingBuilder.AddProvider(new LoggerFileProvider("c:\\log.txt"));

                    // TraceSource Logger
                    var sourceSwitch = new SourceSwitch("sourceSwitch", "HRM Logging");
                    sourceSwitch.Level = SourceLevels.Warning;
                    loggingBuilder.AddTraceSource(sourceSwitch, new TextWriterTraceListener(writer: Console.Out));
                });

        public static void RundSeeding(IWebHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                try
                {
                    var seeder = scope.ServiceProvider.GetService<HRMSeeder>();
                    seeder.Seed();
                }
                catch(Exception ex)
                {
                    var logger = scope.ServiceProvider.GetRequiredService<ILogger<Program>>();
                    logger.LogError(ex, "An error occurred while initializing the database.");
                }

            }
        }

        private static void CustomAppConfiguration(WebHostBuilderContext context, IConfigurationBuilder builder)
        {
            // Current environment
            var environment = context.HostingEnvironment;

            // Removing default configuration options
            builder.Sources.Clear();

            builder.SetBasePath(environment.ContentRootPath)
                .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                .AddJsonFile("customconnectionstring.json", optional: false, reloadOnChange: true)
                .AddJsonFile($"customconnectionstring.{environment.EnvironmentName}.json", optional: true)
                .AddJsonFile($"appsettings.{environment.EnvironmentName}.json", optional: true)
                .AddEnvironmentVariables();
        }
    }
}
