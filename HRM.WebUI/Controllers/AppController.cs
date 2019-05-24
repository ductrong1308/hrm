using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Common.Constants;
using HRM.Common.Resources;
using HRM.WebUI.ViewModels;
using HRMPersistence.Identity.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HRM.WebUI.Controllers
{
    public class AppController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly SignInManager<AppUser> _signInManager;

        public AppController(IConfiguration configuration, SignInManager<AppUser> signInManager)
        {
            _configuration = configuration;
            _signInManager = signInManager;
        }

        public IActionResult Index()
        {
            if (this.User.Identity.IsAuthenticated)
            {
                return View(BuildAppViewModel());
            }

            return RedirectToAction("Login", "Account");
        }

        public async Task<IActionResult> Error(int errorCode = HRMConstants.ERROR_CODE_UNAUTHORIZED)
        {
            var errorViewModel = new ErrorViewModel()
            {
                ErrorCode = errorCode
            };

            switch (errorCode)
            {
                case HRMConstants.ERROR_CODE_FORBIDDEN:
                case HRMConstants.ERROR_CODE_UNAUTHORIZED:
                    errorViewModel.ErrorTitle = HRMResources.Error_Unauthorized_Title;
                    errorViewModel.ErrorMessage = HRMResources.Error_Unauthorized_Message;
                    await _signInManager.SignOutAsync();
                    break;

                case HRMConstants.ERROR_CODE_INTERNAL_SERVER:
                    errorViewModel.ErrorTitle = HRMResources.Error_InternalServer_Title;
                    errorViewModel.ErrorMessage = HRMResources.Error_InternalServer_Message;
                    break;

                default:
                    errorViewModel.ErrorTitle = HRMResources.Error_PageNotFound_Title;
                    errorViewModel.ErrorMessage = HRMResources.Error_PageNotFound_Message;
                    break;
            }

            return View(errorViewModel);
        }

        private AppViewModel BuildAppViewModel()
        {
            return new AppViewModel()
            {
                ApiHost = _configuration.GetValue<string>("ApiHost"),
                User = new UserDataViewModel()
            };
        }
    }
}
