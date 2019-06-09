using System;
using System.Collections.Generic;
using System.Text;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using MediatR;

namespace HRM.Application.Employees.Commands.CreateEmployee
{
    public class CreateEmployeeCommand: BaseCommand<EmployeeViewModel>
    {
    }
}
