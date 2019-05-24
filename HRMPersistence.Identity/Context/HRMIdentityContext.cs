using System;
using System.Collections.Generic;
using System.Text;
using HRM.Common.Constants;
using HRMPersistence.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace HRMPersistence.Identity.Context
{
    public class HRMIdentityContext: IdentityDbContext<AppUser>
    {
        public HRMIdentityContext(DbContextOptions<HRMIdentityContext> options)
            : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Customize the ASP.NET Identity model and override the defaults if needed.
            // For example, you can rename the ASP.NET Identity table names and more.
            // Add your customizations after calling base.OnModelCreating(builder);

            modelBuilder.Entity<IdentityRole>().HasData(
                new IdentityRole
                {
                    Name = HRMConstants.ROLE_EMPLOYEE,
                    NormalizedName = HRMConstants.ROLE_EMPLOYEE.ToUpper()
                });
        }
    }
}
