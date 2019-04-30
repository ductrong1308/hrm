using System.Collections.Generic;
using HRM.Application.Employees.ViewModels;
using MediatR;

namespace HRM.Application.Employees.Queries.GetEmployeeList
{
    public class GetEmployeesListQuery: IRequest<IEnumerable<EmployeeViewModel>>
    {

    }
}
