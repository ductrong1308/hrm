using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HRM.Application.Infrastructure;
using HRM.Domain.Base;
using Microsoft.EntityFrameworkCore;

namespace HRM.Infrastructure.Repositories
{
    public class UnitOfWork<TContext> : IUnitOfWork
        where TContext: DbContext
    {
        private readonly TContext _currentDbContext;
        private readonly Dictionary<Type, object> _respositories = new Dictionary<Type, object>();
        protected readonly IServiceProvider _serviceProvider;

        public Dictionary<Type, object> Repositories
        {
            get { return _respositories; }
            set { Repositories = value; }
        }

        public UnitOfWork(TContext context, IServiceProvider serviceProvider)
        {
            _currentDbContext = context;
            _serviceProvider = serviceProvider;
        }

        public IRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity
        {
            if (Repositories.Keys.Contains(typeof(TEntity)))
            {
                return Repositories[typeof(TEntity)] as IRepository<TEntity>;
            }

            IRepository<TEntity> specificRepository = _serviceProvider.GetService(typeof(IRepository<TEntity>)) as IRepository<TEntity>;
            Repositories.Add(typeof(TEntity), specificRepository);

            return specificRepository;
        }

        public async Task<int> Commit()
        {
            return await _currentDbContext.SaveChangesAsync();
        }

        public async Task Rollback()
        {
            await Task.Run(() => _currentDbContext.ChangeTracker.Entries().ToList().ForEach(x => x.ReloadAsync()));
        }

        public void Dispose()
        {
            _currentDbContext.Dispose();
            GC.SuppressFinalize(this);
        }
    }
}
