using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Common.Constants
{
    public static class HRMConstants
    {
        public const int LIMITED_REQUEST_EXECUTION_TIME = 500; // MILLISECONDS

        // User Roles
        public const string ROLE_EMPLOYEE = "employee";

        // Error Code
        public const int ERROR_CODE_UNAUTHORIZED = 401;

        public const int ERROR_CODE_FORBIDDEN = 403;

        public const int ERROR_CODE_INTERNAL_SERVER = 500;

        public const int ERROR_CODE_PAGE_NOT_FOUND = 404;

        // Permanent Links

        public const string LINK_HOME_PAGE = "/";
        
        public const string LINK_ACCOUNT_LOGIN_PAGE = "/Account/Login";

        // Filter Logic
        public const string FILTER_LOGIC_AND = "and";
        public const string FILTER_LOGIC_OR = "or";

        // OrderBy Direction
        public const string ORDER_BY_ASC = "asc";

        public const string ORDER_BY_DESC = "desc";

        public const string LINQ_TRANSLATED_ORDER_BY_ASC = "OrderBy";

        public const string LINQ_TRANSLATED_ORDER_BY_DESC = "OrderByDescending";

        // Query Page
        public const int DEFAULT_PAGE_QUERY_SKIP = 0;

        public const int DEFAULT_PAGE_QUERY_TAKE = 20;

    }
}
