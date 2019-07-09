using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Books.ViewModels;
using HRM.Application.Infrastructure.MongoBaseRequestHandler;
using MediatR;

namespace HRM.Application.Books.Queries
{
    class GetBookListQueryHandler : IRequestHandler<GetBookListQuery, List<BookViewModel>>
    {
        private readonly IMongoBaseRequestHandler _bookService;

        public GetBookListQueryHandler(IMongoBaseRequestHandler bookService)
        {
            _bookService = bookService;
        }

        public async Task<List<BookViewModel>> Handle(GetBookListQuery request, CancellationToken cancellationToken)
        {
            //var books = await _bookService.GetAsync();
            //return _mapper.Map<List<BookViewModel>>(books);

            var books = await _bookService.GetViewModelAsync();
            return books;
        }
    }
}
