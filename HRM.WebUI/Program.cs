using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using HRM.Persistence.SeedingData;
using HRMPersistence.Identity.IdentitySeeder;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace HRM.WebUI
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
                .ConfigureLogging((hostingContext, logging) => {
                    logging.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    logging.AddConsole();
                    logging.AddDebug();

                    // TraceSource Logger
                    var sourceSwitch = new SourceSwitch("sourceSwitch", "HRM Logging");
                    sourceSwitch.Level = SourceLevels.Warning;
                    logging.AddTraceSource(sourceSwitch, new TextWriterTraceListener(writer: Console.Out));
                });

        public static void RundSeeding(IWebHost host)
        {
            var scopeFactory = host.Services.GetService<IServiceScopeFactory>();
            using (var scope = scopeFactory.CreateScope())
            {
                try
                {
                    var seeder = scope.ServiceProvider.GetService<IdentitySeeder>();
                    seeder.SeedAsync().Wait();
                }
                catch (Exception ex)
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
