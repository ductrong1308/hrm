using System.Threading.Tasks;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace HRM.WebAPI.Controllers.Employees
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class EmployeeController : BaseController
    {
        public async Task<ActionResult<BaseListResponse<EmployeeViewModel>>> List(string state)
        {
            var response = await Mediator.Send(new GetEmployeesListQuery() { State = state });
            return new JsonResult(response);
        }
    }
}