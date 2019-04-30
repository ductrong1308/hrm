using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using HRM.Domain.Entities;
using HRM.Persistence.Context;

namespace HRM.Persistence.SeedingData
{
    public class HRMSeeder
    {
        private readonly HRMContext _hrmContext;
        
        public HRMSeeder(HRMContext hrmContext)
        {
            _hrmContext = hrmContext;
        }

        public void Seed()
        {
            // Check if database already created.
            _hrmContext.Database.EnsureCreated();

            if (!_hrmContext.Employees.Any())
            {
                var employees = new List<Employee>()
                {
                    new Employee()
                    {
                        Id = 1,
                        FirstName = "Cristiano",
                        LastName = "Ronaldo",
                        DateOfBirth = DateTime.Now.AddYears(-34)
                    },
                    new Employee()
                    {
                        Id = 2,
                        FirstName = "Lionel",
                        LastName = "Messi",
                        DateOfBirth = DateTime.Now.AddYears(-30)
                    }
                };

                _hrmContext.Employees.AddRange(employees);
                _hrmContext.SaveChanges();
            }
        }
    }
}
