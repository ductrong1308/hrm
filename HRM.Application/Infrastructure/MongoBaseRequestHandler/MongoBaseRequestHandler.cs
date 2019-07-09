using System.Collections.Generic;
using System.Threading.Tasks;
using AutoMapper;
using HRM.Application.Books.ViewModels;
using HRM.Domain.Entities.Mongo;
using MongoDB.Driver;

namespace HRM.Application.Infrastructure.MongoBaseRequestHandler
{
    public class MongoBaseRequestHandler : IMongoBaseRequestHandler
    {
        private readonly IMongoDatabase _database;
        private readonly IMongoCollection<Book> _currentContext;
        protected readonly IMapper _mapper;

        public MongoBaseRequestHandler(IMongoDatabase database, IMapper mapper)
        {
            _database = database;
            _mapper = mapper;
            _currentContext = database.GetCollection<Book>("Books");
        }

        public List<Book> Get() =>
            _currentContext.Find(book => true).ToList();

        public async Task<List<Book>> GetAsync()
        {
            var books = await _currentContext.Find(_ => true).ToListAsync();
            return books;
        }

        public async Task<List<BookViewModel>> GetViewModelAsync()
        {
            var books = await _currentContext.Find(_ => true).ToListAsync();
            return _mapper.Map<List<BookViewModel>>(books);
        }

        public Book Get(string id) =>
            _currentContext.Find<Book>(book => book.Id == id).FirstOrDefault();

        public Book Create(Book book)
        {
            _currentContext.InsertOne(book);
            return book;
        }

        public void Update(string id, Book bookIn) =>
            _currentContext.ReplaceOne(book => book.Id == id, bookIn);

        public void Remove(Book bookIn) =>
            _currentContext.DeleteOne(book => book.Id == bookIn.Id);

        public void Remove(string id) =>
            _currentContext.DeleteOne(book => book.Id == id);
    }
}
