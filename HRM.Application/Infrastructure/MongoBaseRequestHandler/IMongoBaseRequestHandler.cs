using System.Collections.Generic;
using System.Threading.Tasks;
using HRM.Application.Books.ViewModels;
using HRM.Domain.Entities.Mongo;

namespace HRM.Application.Infrastructure.MongoBaseRequestHandler
{
    public interface IMongoBaseRequestHandler
    {
        Book Create(Book book);
        List<Book> Get();
        Book Get(string id);
        Task<List<Book>> GetAsync();
        Task<List<BookViewModel>> GetViewModelAsync();
        void Remove(Book bookIn);
        void Remove(string id);
        void Update(string id, Book bookIn);
    }
}