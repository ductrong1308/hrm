using HRM.Application.Infrastructure.Interfaces;
using HRM.Application.Infrastructure.MongoBaseRequestHandler;
using HRM.Application.Providers.Azure;
using HRM.Application.Providers.Azure.Interfaces;
using HRM.Application.Providers.BlobStorage;
using HRM.Application.Providers.BlobStorage.Interfaces;
using HRM.Domain.Entities;
using HRM.Infrastructure.Repositories;
using HRM.Infrastructure.Repositories.Employees;
using HRM.Persistence.Context;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace HRM.Infrastructure.IoC
{
    public class WebApiBootstrapper
    {
        public static void RegisterServices<TEntityContext>(
            IServiceCollection services, 
            IHostingEnvironment environment,
            IConfiguration configuration)
            where TEntityContext: EntityContextBase<TEntityContext>
        {
            // ASP.NET HttpContext dependency
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();

            // Unit Of Work
            services.AddScoped<IUnitOfWork, UnitOfWork<TEntityContext>>();

            // Context
            services.AddScoped<IEntityContext, TEntityContext>();

            // Repositories
            services.AddScoped<IRepository<Employee>, EmployeeRepository>();

            // Service
            //services.AddScoped<GetEmployeesListQueryHandler, GetEmployeesListQueryHandler>();

            if (environment.IsDevelopment())
            {
                services.AddSingleton<IBlobStorage, FileSystemBlobStorage>();
            }
            else
            {
                services.AddSingleton<IAzureBlobContext, AzureBlobContext>();
                services.AddSingleton<IBlobStorage, AzureBlobStorage>();
            }

            // MongoDB
            //services.AddSingleton<MongoBaseRequestHandler>();
            services.AddScoped<IMongoBaseRequestHandler, MongoBaseRequestHandler>();

        }
    }
}
