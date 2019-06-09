using System;
using System.IO;
using System.Text;
using System.Threading.Tasks;
using HRM.Application.Employees.Queries.GetEmployeeList;
using HRM.Application.Employees.ViewModels;
using HRM.Application.Infrastructure;
using HRM.Application.Providers.BlobStorage.Interfaces;
using HRM.Common.Constants;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace HRM.WebAPI.Controllers.Employees
{
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class EmployeeController : BaseController
    {
        private readonly IBlobStorage _blobStoreProvider;

        public EmployeeController(IBlobStorage blobStoreProvider)
        {
            _blobStoreProvider = blobStoreProvider;
        }

        public async Task<ActionResult<BaseListResponse<EmployeeViewModel>>> List(string state)
        {
            var response = await Mediator.Send(new GetEmployeesListQuery() { State = state });
            return new JsonResult(response);
        }

        public async Task<ActionResult<bool>> Create(EmployeeViewModel newEmployee)
        {
            return new JsonResult(newEmployee);
        }


        public async Task<ActionResult> UploadImage(IFormFile files)
        {
            string blobPointer = string.Empty;

            using (Stream file = files.OpenReadStream())
            {
                if (file != null)
                {
                    blobPointer = await _blobStoreProvider.PutBlobAsync(HRMConstants.TEMP, files.FileName, file);
                }
            }

            return new JsonResult(blobPointer);
        }

        [EnableCors(PolicyName = "HrmUploadFiles")]
        public async Task<ActionResult> RemoveImage()
        {
            bool isSuccessful = false;
            var blobPointerPath = HttpContext.Request.Form["blobPointerPath"];
            if (!string.IsNullOrEmpty(blobPointerPath))
            {
                await _blobStoreProvider.DeleteBlobAsync(blobPointerPath);
                isSuccessful = true;
            }

            return new JsonResult(isSuccessful);
        }
    }

}