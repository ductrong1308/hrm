using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using MediatR;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HRM.WebAPI.Controllers.Employees
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class EmployeeController : BaseController
    {
        public async Task<ActionResult<List<EmployeeViewModel>>> List(string state)
        {
            var test = this.HttpContext.Request.Headers.ToList();
            var employees = await Mediator.Send(new GetEmployeesListQuery() { State = state });

            return new JsonResult(employees);
        }
    }
}