using System;
using System.Collections.Generic;
using System.Text;
using FluentValidation;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;

namespace HRM.Application.Employees.Commands.CreateEmployee
{
    public class CreateEmployeeValidator : BaseValidator<EmployeeViewModel>
    {
        public CreateEmployeeValidator()
        {
            RuleFor(x => x.FirstName).NotEmpty();
            RuleFor(x => x.LastName).NotEmpty();
            RuleFor(x => x.JobTitle).NotEmpty();
            RuleFor(x => x.RoleList).NotEmpty();

            RuleFor(x => x.CreatedUser).NotEmpty();
            RuleFor(x => x.CreatedDate).NotEmpty();

            RuleFor(x => x.RowVersion).NotEmpty().When(y => y.Id > 0);
            RuleFor(x => x.UpdatedUser).NotEmpty().When(y => y.Id > 0);
            RuleFor(x => x.UpdatedDate).NotEmpty().When(y => y.Id > 0);
        }
    }
}
