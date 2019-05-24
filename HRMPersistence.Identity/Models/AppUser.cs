using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.AspNetCore.Identity;

namespace HRMPersistence.Identity.Models
{
    public class AppUser: IdentityUser
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }
    }
}
