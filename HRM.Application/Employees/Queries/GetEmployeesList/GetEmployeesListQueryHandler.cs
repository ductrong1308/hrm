using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using HRM.Application.Infrastructure.Interfaces;
using HRM.Domain.Entities;
using System.Linq;
using MediatR;

namespace HRM.Application.Employees.Queries.GetEmployeesList
{
    public class GetEmployeesListQueryHandler 
        : BaseRequestHandler<Employee, EmployeeViewModel>, IRequestHandler<GetEmployeesListQuery, BaseListResponse<EmployeeViewModel>>
    {
        public GetEmployeesListQueryHandler(IMapper mapper, IUnitOfWork unitOfWork)
            : base(mapper, unitOfWork)
        {
        }

        public async Task<BaseListResponse<EmployeeViewModel>> Handle(GetEmployeesListQuery request, CancellationToken cancellationToken)
        {
            return await base.Handle(request, cancellationToken);
        }

    }
}
