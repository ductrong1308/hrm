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
using System.Reflection;

namespace HRM.Application.Employees.Queries.GetEmployeesList
{
    public class GetEmployeesListQueryHandler : BaseRequestHandler<Employee>, IRequestHandler<GetEmployeesListQuery, IEnumerable<EmployeeViewModel>>
    {
        public GetEmployeesListQueryHandler(IMapper mapper, IUnitOfWork unitOfWork)
            :base(mapper, unitOfWork)
        {
        }

        public async Task<IEnumerable<EmployeeViewModel>> Handle(GetEmployeesListQuery request, CancellationToken cancellationToken)
        {
            var employees = await this._repository.ListAsync(request);
            var employeeListViewModel = this._mapper.Map<IEnumerable<EmployeeViewModel>>(employees);

            return employeeListViewModel;
        }
    }
}
