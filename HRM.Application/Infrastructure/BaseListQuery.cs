using HRM.Application.Infrastructure.ViewModel;
using MediatR;

namespace HRM.Application.Infrastructure
{
    public class BaseListQuery<TViewModel>: IRequest<ListResponseViewModel<TViewModel>>
    {
        public string State { get; set; }
    }
}
