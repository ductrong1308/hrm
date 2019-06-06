using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Common.Exceptions;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace HRM.WebAPI.Filters
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            ApiError error;
            var exception = context.Exception;
            if (exception is AppException)
            {
                // handle explicit 'known' errors
                context.Exception = null;
                context.ExceptionHandled = true;
                context.HttpContext.Response.StatusCode = 500;

                error = new ApiError(exception.Message)
                {
                    IsDbConcurrencyUpdate = ((AppException)exception).IsDbConcurrencyUpdate,
                    AdditionalData = ((AppException)exception).AdditionalData
                };
            }
            else if (exception is FluentValidation.ValidationException)
            {
                context.Exception = null;
                context.ExceptionHandled = true;
                context.HttpContext.Response.StatusCode = 500;

                // Remove unnecessary string
                error = new ApiError(exception.Message.Replace("Validation failed: \r\n -- ", string.Empty));
            }
            else
            {
                // Unhandled errors
                context.HttpContext.Response.StatusCode = 500;

#if !DEBUG
                var msg = "An unhandled error occurred.";
#else
                var msg = exception.GetBaseException().Message;
                msg += Environment.NewLine + exception.StackTrace;
#endif

                error = new ApiError(msg);
            }

            context.Result = new JsonResult(error);

            base.OnException(context);
        }
    }

    public class ApiError
    {
        public ApiError(string errorMessage)
        {
            ErrorMessage = errorMessage;
        }

        public string ErrorMessage { get; set; }

        public object AdditionalData { get; set; }

        public bool IsDbConcurrencyUpdate { get; set; }
    }
}
