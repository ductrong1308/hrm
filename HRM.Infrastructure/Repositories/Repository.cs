using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using HRM.Application.Infrastructure;
using HRM.Application.Infrastructure.Interfaces;
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
        #region Filter, OrderBy, IncludeProperties

        public virtual Dictionary<string, string> FilterMaps => new Dictionary<string, string>();

        public virtual Dictionary<SortData, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>> OrderByMaps
            => new Dictionary<SortData, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>>()
            {
                { new SortData("Id", "asc"), x => x.OrderBy(t => t.Id) },
                { new SortData("Id", "desc"), x => x.OrderByDescending(t => t.Id) }
            };

        public virtual OrderByQuery<TEntity> DefaultOrderBy
            => new OrderByQuery<TEntity>(x => x.OrderByDescending(e => e.UpdatedDate).ThenByDescending(e => e.CreatedDate));

        public virtual Func<IQueryable<TEntity>, IQueryable<TEntity>> IncludePropertiesForDetail { get; }

        public virtual Func<IQueryable<TEntity>, IQueryable<TEntity>> IncludePropertiesForList { get; }

        #endregion

        private readonly TContext _currentContext;

        public Repository(TContext context)
        {
            _currentContext = context;
        }

        public virtual async Task<int> CountAsync(Expression<Func<TEntity, bool>> filter = null)
        {
            IQueryable<TEntity> query = _currentContext.Set<TEntity>();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            return await query.CountAsync();
        }

        public virtual async Task<BaseListResponse<TEntity>> ListAsync(string queryState)
        {
            QueryStateModel queryStateModel = new QueryStateModel();
            Expression<Func<TEntity, bool>> filter = null;
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null;
            try
            {
                queryStateModel = JsonConvert.DeserializeObject<QueryStateModel>(queryState);
                if (queryStateModel.Sort != null && queryStateModel.Sort.Any())
                {
                    orderBy = new OrderByQuery<TEntity>(queryStateModel.Sort, this.OrderByMaps).OrderByExpression;
                }

                if (queryStateModel.Filter != null && queryStateModel.Filter.Filters != null && queryStateModel.Filter.Filters.Any())
                {
                    filter = new FilterQuery<TEntity>(queryStateModel.Filter, this.FilterMaps).FilterExpression;
                }

                var listCount = await this.CountAsync(filter);
                var listResult = await this.ListAsync(queryStateModel.Skip, queryStateModel.Take, filter, orderBy, IncludePropertiesForList);


                return new BaseListResponse<TEntity> {
                    ListCount = listCount,
                    ListResult = listResult.ToList()
                };

            }
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

        public virtual async Task<IEnumerable<TEntity>> ListAsync(
            int skip,
            int take,
            Expression<Func<TEntity, bool>> filter = null,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy = null,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> includes = null)
        {
            IQueryable<TEntity> query = _currentContext.Set<TEntity>();

            if (filter != null)
            {
                query = query.Where(filter);
            }

            if (includes != null)
            {
                query = includes(query);
            }

            if (orderBy != null)
            {
                query = orderBy(query);
            }

            return await query.Skip(skip).Take(take).ToListAsync();
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

        public async virtual Task CreateAsync(TEntity entity)
        {
            await _currentContext.Set<TEntity>().AddAsync(entity);
        }
    }
}