using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Common.Constants;
using HRM.Common.Resources;

namespace HRM.WebUI.ViewModels
{
    public class ErrorViewModel
    {
        public int ErrorCode { get; set; }

        public string ErrorTitle { get; set; }

        public string ErrorMessage { get; set; }

        public bool IsUnauthorized => (ErrorCode == HRMConstants.ERROR_CODE_UNAUTHORIZED || ErrorCode == HRMConstants.ERROR_CODE_FORBIDDEN);

        public string RedirectUrl
        {
            get
            {
                return IsUnauthorized ? HRMConstants.LINK_ACCOUNT_LOGIN_PAGE : HRMConstants.LINK_HOME_PAGE;
            }
        }

        public string RedirectUrlText
        {
            get
            {
                return IsUnauthorized ? HRMResources.LoginPage : HRMResources.HomePage;
            }
        }
    }
}
