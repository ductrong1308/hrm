using System;
using System.Collections.Generic;
using System.Text;
using HRM.Domain.Base;

namespace HRM.Domain.Entities
{
    public class Employee : BaseEntity
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Address { get; set; }

        public string PhoneNumber { get; set; }

        public string Email { get; set; }

        public string JobTitle { get; set; }

        public string RoleList { get; set; }

        public string ImageUrl { get; set; }
    }
}
