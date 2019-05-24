using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using HRMPersistence.Identity.Context;
using HRMPersistence.Identity.Models;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;

namespace HRMPersistence.Identity.IdentitySeeder
{
    public class IdentitySeeder
    {
        private readonly HRMIdentityContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<AppUser> _userManager;

        public IdentitySeeder(HRMIdentityContext ctx, IHostingEnvironment hosting, UserManager<AppUser> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            _ctx.Database.EnsureCreated();

            // Seed the Main User
            AppUser user = await _userManager.FindByEmailAsync("ductrong1308@gmail.com");
            if (user == null)
            {
                user = new AppUser()
                {
                    FirstName = "Bradley",
                    LastName = "Mac",
                    Email = "ductrong1308@gmail.com",
                    UserName = "ductrong1308@gmail.com"
                };

                var result = await _userManager.CreateAsync(user, "Abc@123");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Could not create user in Seeding");
                }
            }

            _ctx.SaveChanges();

        }
    }
}
