using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HRM.Common.Exceptions;
using HRM.Common.Extensions;
using Microsoft.ApplicationInsights;
using Microsoft.ApplicationInsights.DataContracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Newtonsoft.Json;

namespace HRM.WebAPI.Filters
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        private TelemetryClient telemetry = new TelemetryClient();

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
                context.HttpContext.Response.StatusCode = 400;

                string rawErrors = exception.Message.Replace("\r\n", string.Empty).Replace("Validation failed: ", string.Empty);
                var responseErrorsList = new List<FluentValidationErrorMessage>();
                var listErrors = rawErrors.Split("--");

                foreach (var item in listErrors)
                {
                    var itemString = item.Trim();
                    if (!string.IsNullOrEmpty(itemString))
                    {
                        var itemError = item.Split(":");
                        FluentValidationErrorMessage response = new FluentValidationErrorMessage()
                        {
                            FieldName = itemError[0].Trim().ToCamelCase(),
                            ValidationMessage = itemError[1].Trim().Replace("'", string.Empty)
                        };
                        responseErrorsList.Add(response);
                    }

                }

                error = new ApiError(JsonConvert.SerializeObject(responseErrorsList)) {
                    IsValidationFailed = true
                };
            }
            else
            {
                // Unhandled errors
                context.HttpContext.Response.StatusCode = 500;

#if !DEBUG
                //var msg = "An unhandled error occurred.";
                var msg = exception.GetBaseException().Message;
                msg += Environment.NewLine + exception.StackTrace;
#else
                var msg = exception.GetBaseException().Message;
                msg += Environment.NewLine + exception.StackTrace;
#endif

                error = new ApiError(msg);
            }

            // Add azure telemetry for tracing error details
            telemetry.TrackTrace(error.ErrorMessage, SeverityLevel.Warning, null);

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

        public bool IsValidationFailed { get; set; }
    }

    public class FluentValidationErrorMessage
    {
        public string FieldName { get; set; }

        public string ValidationMessage { get; set; }
    }
}
