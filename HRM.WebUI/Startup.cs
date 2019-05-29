using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Infrastructure;
using HRM.Application.Utilities.MediatR;
using HRM.Persistence.Context;
using HRM.Persistence.SeedingData;
using HRMPersistence.Identity.Context;
using HRMPersistence.Identity.IdentitySeeder;
using HRMPersistence.Identity.Models;
using MediatR;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Rewrite;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;

namespace HRM.WebUI
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
            // Identity
            services.AddIdentity<AppUser, IdentityRole>(cfg =>
            {
                cfg.User.RequireUniqueEmail = true;
            }).AddEntityFrameworkStores<HRMIdentityContext>();

            services.AddAuthentication().AddCookie();

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

            // HRM Dependency Injection
            services.AddTransient<IdentitySeeder>();

            // MVC
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();

                app.UseStaticFiles();
                app.UseAuthentication();

                app.UseMvc(route =>
                {
                    route.MapRoute("Default", "/{controller}/{action}/{id?}", new { Controller = "App", Action = "Index" });
                });


                app.MapWhen(context => context.Request.Path.Value.StartsWith("/"), builder =>
                {
                    builder.UseMvc(routes =>
                    {
                        routes.MapSpaFallbackRoute("spa-fallback", new { controller = "App", action = "Index" });
                    });
                });
            }
        }
    }
}
