using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace HRM.Application.Infrastructure
{
    public class BaseQuery<TViewModel>: IRequest<TViewModel>
    {
    }
}
