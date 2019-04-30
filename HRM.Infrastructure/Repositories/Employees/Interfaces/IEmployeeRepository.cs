using System;
using System.Collections.Generic;
using System.Text;
using HRM.Application.Infrastructure;
using HRM.Domain.Entities;

namespace HRM.Infrastructure.Repositories.Employees.Interfaces
{
    public interface IEmployeeRepository: IRepository<Employee>
    {
    }
}
