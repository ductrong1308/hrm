using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace HRM.Application.Infrastructure
{
    public class BaseListQuery<TViewModel>: IRequest<BaseListResponse<TViewModel>>
    {
        public string State { get; set; }
    }
}
