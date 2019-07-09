using System.Collections.Generic;
using HRM.Application.Books.ViewModels;
using MediatR;

namespace HRM.Application.Books.Queries
{
    public class GetBookListQuery: IRequest<List<BookViewModel>>
    {
    }
}
