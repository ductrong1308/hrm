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
    }
}
