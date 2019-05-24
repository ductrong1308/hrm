using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using HRM.Application.Employees.Queries;
using HRM.Application.Infrastructure;
using HRM.Application.Infrastructure.Models;
using HRM.Domain.Base;
using HRM.Infrastructure.Models;
using HRM.Infrastructure.Utilities.QueryExtensions;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;

namespace HRM.Infrastructure.Repositories
{
    public abstract class Repository<TContext, TEntity> : IRepository<TEntity>
        where TContext : DbContext where TEntity : BaseEntity, new()
    {
        private readonly TContext _currentContext;

        public virtual Dictionary<string, string> FilterMaps => new Dictionary<string, string>();

        public virtual Dictionary<ListSort, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>> OrderByMaps 
            => new Dictionary<ListSort, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>>()
            {
                { new ListSort("Id", "asc"), x => x.OrderBy(t => t.Id) },
                { new ListSort("Id", "desc"), x => x.OrderByDescending(t => t.Id) }
            };

        public virtual OrderByQuery<TEntity> DefaultOrderBy
            => new OrderByQuery<TEntity>(x => x.OrderByDescending(e => e.UpdatedDate).ThenByDescending(e => e.CreatedDate));

        protected virtual Func<IQueryable<TEntity>, IQueryable<TEntity>> IncludePropertiesForDetail { get; }

        protected virtual Func<IQueryable<TEntity>, IQueryable<TEntity>> IncludePropertiesForList { get; }

        public Repository(TContext context)
        {
            _currentContext = context;
        }

        public virtual async Task<int> CountAsync(Expression<Func<TEntity, bool>> filter = null)
        {
            IQueryable<TEntity> query = _currentContext.Set<TEntity>();

            if (filter != null)
            {
                query.Where(filter);
            }

            return await query.CountAsync();
        }

        public virtual async Task<IEnumerable<TEntity>> ListAsync(BaseListQueryModel query)
        {
            var state = JsonConvert.DeserializeObject<ListQueryModel>(query.State);
            var filter = new FilterQuery<TEntity>(state.Filter, this.FilterMaps);
            var orderBy = new OrderByQuery<TEntity>(state.Sort, this.OrderByMaps);

            return null;
        }

        public virtual async Task<IEnumerable<TEntity>> GetAllAsync(
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> includes = null)
        {
            IQueryable<TEntity> query = _currentContext.Set<TEntity>();

            if (filter != null)
            {
                query.Where(filter);
            }

            if (includes != null)
            {
                query = includes(query);
            }

            if (orderBy != null)
            {
                query = orderBy(query);
            }

            try
            {
                var abc = query.ToList();
            }
            catch (Exception ex)
            {

                throw;
            }

            return await query.ToListAsync();
        }

        public virtual async Task<TEntity> GetByIdAsync(int id, Func<IQueryable<TEntity>, IQueryable<TEntity>> includes = null)
        {
            IQueryable<TEntity> query = _currentContext.Set<TEntity>();
            if (includes != null)
            {
                query = includes(query);
            }

            return await query.SingleOrDefaultAsync(x => x.Id == id);
        }

        public virtual Task<IEnumerable<TEntity>> QueryPageAsync(int? skip, int? take, Expression<Func<TEntity, bool>> filters, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy, Func<IQueryable<TEntity>, IQueryable<TEntity>> includes)
        {
            throw new NotImplementedException();
        }
    }
}
