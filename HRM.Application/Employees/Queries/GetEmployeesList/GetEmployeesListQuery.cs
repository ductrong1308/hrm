using System.Collections.Generic;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure.Models;
using MediatR;

namespace HRM.Application.Employees.Queries.GetEmployeeList
{
    public class GetEmployeesListQuery: BaseListQueryModel, IRequest<IEnumerable<EmployeeViewModel>>
    {
        public GetEmployeesListQuery(): base()
        {
        }
    }
}
