using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRM.WebAPI.Controllers.Employees
{
    public class EmployeeController : BaseController
    {
        public async Task<ActionResult<List<EmployeeViewModel>>> List()
        {
            var employees = await Mediator.Send(new GetEmployeesListQuery());
            return Ok(employees);
        }
    }
}