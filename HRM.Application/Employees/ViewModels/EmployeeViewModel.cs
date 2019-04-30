using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Application.Employees.ViewModels
{
    public class EmployeeViewModel
    {
        public int Id { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string FullName => string.Format("{0} {1}", FirstName, LastName);
    }
}
