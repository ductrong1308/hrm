using System.Collections.Generic;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using MediatR;

namespace HRM.Application.Employees.Queries.GetEmployeeList
{
    public class GetEmployeesListQuery: BaseListQuery<EmployeeViewModel>
    {
        public string Test { get; set; }
    }
}
