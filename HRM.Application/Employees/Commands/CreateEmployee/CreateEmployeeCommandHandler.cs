using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using HRM.Application.Infrastructure.Interfaces;
using HRM.Domain.Entities;
using MediatR;

namespace HRM.Application.Employees.Commands.CreateEmployee
{
    public class CreateEmployeeCommandHandler :BaseRequestHandler<Employee, EmployeeViewModel>, 
        IRequestHandler<CreateEmployeeCommand, EmployeeViewModel>
    {
        public CreateEmployeeCommandHandler(IMapper mapper, IUnitOfWork unitOfWork) 
            : base(mapper, unitOfWork)
        {
        }

        public Task<EmployeeViewModel> Handle(CreateEmployeeCommand request, CancellationToken cancellationToken)
        {
            return base.CreateAsync(request, cancellationToken);
        }
    }
}
