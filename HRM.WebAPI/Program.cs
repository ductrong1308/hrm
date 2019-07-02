using System;
using System.Diagnostics;
using System.IO;
using HRM.Persistence.SeedingData;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Logging.AzureAppServices;

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
            WebHost.CreateDefaultBuilder(args) // this cal Kestrel behind the scene
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseIISIntegration()
                .ConfigureAppConfiguration(CustomAppConfiguration)
                .UseStartup<Startup>()
                .ConfigureLogging((hostingContext, loggingBuilder) =>
                {
                    loggingBuilder.AddConfiguration(hostingContext.Configuration.GetSection("Logging"));
                    loggingBuilder.AddConsole();
                    loggingBuilder.AddDebug();

                    // write log to local
                    //loggingBuilder.AddProvider(new LoggerFileProvider("c:\\log.txt"));

                    if (!hostingContext.HostingEnvironment.IsDevelopment())
                    {
                        // Azure
                        loggingBuilder.AddAzureWebAppDiagnostics();

                        // write log to application insight
                        loggingBuilder.AddApplicationInsights(hostingContext.Configuration.GetSection("ApplicationInsights:InstrumentationKey").Value);
                    }

                }).
                ConfigureServices(serviceCollection => serviceCollection // This is AddAzureWebAppDiagnostics
                    .Configure<AzureFileLoggerOptions>(options =>
                    {
                        options.FileName = "azure-diagnostics-";
                        options.FileSizeLimit = 50 * 1024;
                        options.RetainedFileCountLimit = 5;
                    }).Configure<AzureBlobLoggerOptions>(options =>
                    {
                        options.BlobName = "log.txt";
                    }))
                .UseApplicationInsights()
                .CaptureStartupErrors(true)
                .UseStartup<Startup>();

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
