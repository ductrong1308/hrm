using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using MediatR;
using Microsoft.Extensions.Logging;
using HRM.Common.Resources;
using HRM.Common.Constants;

namespace HRM.Application.Utilities.MediatR
{
    public class RequestPerformanceBehaviour<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly Stopwatch _timer;
        private readonly ILogger<TRequest> _logger;

        public RequestPerformanceBehaviour(ILogger<TRequest> logger)
        {
            _timer = new Stopwatch();
            _logger = logger;
        }

        public async Task<TResponse> Handle(TRequest request, CancellationToken cancellationToken, RequestHandlerDelegate<TResponse> next)
        {
            // Using stopwatch to measure the execution time.
            _timer.Start();
            var response = await next();
            _timer.Stop();

            // 
            var consumedTime = _timer.ElapsedMilliseconds;
            if (consumedTime > HRMConstants.LIMITED_REQUEST_EXECUTION_TIME)
            {
                var name = typeof(TRequest).Name;

                // TODO: Add User Details

                _logger.LogWarning(string.Format(LoggingResources.Request_LongRunning, name, _timer.ElapsedMilliseconds));
            }

            return response;
        }
    }
}
