using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using HRM.Application.Infrastructure.Interfaces;
using HRM.Application.Infrastructure.ViewModel;
using HRM.Domain.Entities;
using MediatR;

namespace HRM.Application.Employees.Queries.GetEmployeesList
{
    public class GetEmployeesListQueryHandler 
        : BaseRequestHandler<Employee, EmployeeViewModel>, IRequestHandler<GetEmployeesListQuery, ListResponseViewModel<EmployeeViewModel>>
    {
        public GetEmployeesListQueryHandler(IMapper mapper, IUnitOfWork unitOfWork)
            : base(mapper, unitOfWork)
        {
        }

        public async Task<ListResponseViewModel<EmployeeViewModel>> Handle(GetEmployeesListQuery request, CancellationToken cancellationToken)
        {
            return await ListAsync(request, cancellationToken);
        }

    }
}
