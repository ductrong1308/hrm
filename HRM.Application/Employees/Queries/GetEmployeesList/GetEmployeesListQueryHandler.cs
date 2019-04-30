using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using HRM.Domain.Entities;
using MediatR;
using System.Linq;

namespace HRM.Application.Employees.Queries.GetEmployeesList
{
    public class GetEmployeesListQueryHandler : BaseRequestHandler<Employee, GetEmployeesListQuery, IEnumerable<EmployeeViewModel>>
    {
        public GetEmployeesListQueryHandler()
        {
        }

        public async override Task<IEnumerable<EmployeeViewModel>> Handle(GetEmployeesListQuery request, CancellationToken cancellationToken)
        {
            var employees = await this._repository.GetAllAsync(null, null, null);
            var employeeListViewModel = this._mapper.Map<IEnumerable<EmployeeViewModel>>(employees);

            return employeeListViewModel;
        }
    }
}
