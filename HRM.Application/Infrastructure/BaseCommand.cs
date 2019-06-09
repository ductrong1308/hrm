using System;
using System.Collections.Generic;
using System.Text;
using MediatR;

namespace HRM.Application.Infrastructure
{
    public class BaseCommand<TViewModel>: IRequest<TViewModel> 
    {
        public TViewModel ViewModel { get; set; }
    }
}
