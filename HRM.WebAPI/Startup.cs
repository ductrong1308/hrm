using System;
using System.Reflection;
using System.Text;
using AutoMapper;
using HRM.Application.Infrastructure;
using HRM.Application.Utilities.MediatR;
using HRM.Common;
using HRM.Infrastructure.IoC;
using HRM.Persistence.Context;
using HRM.Persistence.SeedingData;
using HRM.WebAPI.Filters;
using HRMPersistence.Identity.Context;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using Hangfire;
using Hangfire.SqlServer;
using Newtonsoft.Json;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace HRM.WebAPI
{
    public class Startup
    {
        private readonly string _appConnectionString;
        public IConfiguration _configuration { get; }
        public IHostingEnvironment _environment { get; }

        public Startup(IConfiguration configuration, IHostingEnvironment environment)
        {
            _configuration = configuration;
            _environment = environment;
            _appConnectionString = _configuration.GetConnectionString("DefaultConnection");
        }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            // The following line enables Application Insights telemetry collection.
            services.AddApplicationInsightsTelemetry();

            services.Configure<IISServerOptions>(options =>
            {
                options.AutomaticAuthentication = false;
            });

            services.Configure<AppConfig>(_configuration.GetSection("App"));

            // Add Hangfire services.
            services.AddHangfire(configuration => configuration
                .SetDataCompatibilityLevel(CompatibilityLevel.Version_170)
                .UseSimpleAssemblyNameTypeSerializer()
                .UseRecommendedSerializerSettings()
                .UseSqlServerStorage(_configuration.GetConnectionString("HangfireConnection"), new SqlServerStorageOptions
                {
                    CommandBatchMaxTimeout = TimeSpan.FromMinutes(5),
                    SlidingInvisibilityTimeout = TimeSpan.FromMinutes(5),
                    QueuePollInterval = TimeSpan.Zero,
                    UseRecommendedIsolationLevel = true,
                    UsePageLocksOnDequeue = true,
                    DisableGlobalLocks = true
                }));

            // Add the processing server as IHostedService
            services.AddHangfireServer();

            // Automapper
            services.AddAutoMapper();

            // MediatR
            //services.AddMediatR(typeof(Startup).GetTypeInfo().Assembly);
            // MediatR Pipleline for checking performance and validation
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestPerformanceBehaviour<,>));
            services.AddTransient(typeof(IPipelineBehavior<,>), typeof(RequestValidationBehavior<,>));

            services.AddMediatR(typeof(BaseRequestHandler<,>).GetTypeInfo().Assembly);

            // Entityframework Core
            services.AddDbContext<HRMContext>(options => options.UseSqlServer(_appConnectionString));

            // Identity EntityFramework Core
            services.AddDbContext<HRMIdentityContext>(options => options.UseSqlServer(_appConnectionString));

            // MONGO DB - each repository / service will have to call to connect db when using if using this config
            //services.Configure<HRMMongoDatabaseSettings>(_configuration.GetSection(nameof(HRMMongoDatabaseSettings)));
            // TODO: check here
            //services.AddSingleton<IHRMMongoDatabaseDatabaseSettings>(sp =>
            //    sp.GetRequiredService<IOptions<HRMMongoDatabaseSettings>>().Value);

            // Globally
            var mongoClient = new MongoClient(_configuration.GetSection("HRMMongoDatabaseSettings:ConnectionString").Value);
            var database = mongoClient.GetDatabase(_configuration.GetSection("HRMMongoDatabaseSettings:DatabaseName").Value);
            services.AddScoped<IMongoDatabase>(_ => database);


            // HRM Dependency Injection
            services.AddTransient<HRMSeeder>();

            // Authentication
            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
            })
            .AddCookie()
            .AddJwtBearer(cfg =>
            {
                cfg.RequireHttpsMetadata = true;
                cfg.TokenValidationParameters = new TokenValidationParameters()
                {
                    ValidateIssuer = true,
                    ValidateAudience = true,
                    ValidIssuer = _configuration["Tokens:Issuer"],
                    ValidAudience = _configuration["Tokens:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(
                        Encoding.UTF8.GetBytes(Environment.GetEnvironmentVariable("TOKEN_KEY")))
                };
            });

            // CORS
            services.AddCors(options =>
            {
                options.AddDefaultPolicy(
                    builder =>
                    {
                        builder.AllowAnyOrigin()
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials();
                    });

                options.AddPolicy("HrmUploadFiles",
                    builder =>
                    {
                        builder.WithOrigins("https://localhost:44302")
                            .AllowAnyMethod()
                            .AllowAnyHeader()
                            .AllowCredentials();
                    });
            });

            // MVC
            services.AddMvc(options => {
                options.Filters.Add(new ApiExceptionFilter());
            }).AddJsonOptions(options =>
            {
                // To ignore looping in related entity dependency
                // Related data and serialization: <ref to="https://docs.microsoft.com/en-us/ef/core/querying/related-data" />
                //options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore;
                //options.SerializerSettings.DateTimeZoneHandling = DateTimeZoneHandling.Utc;
                //options.SerializerSettings.NullValueHandling = NullValueHandling.Ignore;
                //options.UseMemberCasing();
            }).SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

            // Infrastructure IoC
            WebApiBootstrapper.RegisterServices<HRMContext>(services, _environment, _configuration);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory, IBackgroundJobClient backgroundJobs)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
                app.UseExceptionHandler("/Error");
            }

            app.UseStaticFiles();

            // Hangfire
            app.UseHangfireDashboard("/hangfire", new DashboardOptions
            {
                Authorization = new[] { new HangfireAuthorizationFilter() }
            });

            app.UseHangfireServer();

            // CORS
            //app.UseCors();

            app.UseHttpsRedirection();

            app.UseAuthentication();

            //app.UseMvc();

            app.UseMvc(routes =>
            {
                routes.MapRoute(name: "api", template: "api/{controller}/{action?}/{id?}");
            });

        }
    }
}
