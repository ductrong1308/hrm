using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using HRM.Application.Employees.Queries;
using HRM.Application.Infrastructure.Models;
using HRM.Domain.Base;

namespace HRM.Application.Infrastructure
{
    public interface IRepository<TEntity> where TEntity : BaseEntity
    {
        Dictionary<string, string> FilterMaps { get; }

        Dictionary<ListSort, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>> OrderByMaps { get; }

        // Get Entity By Id
        Task<TEntity> GetByIdAsync(int id, Func<IQueryable<TEntity>, IQueryable<TEntity>> includes);

        // Get All Entities
        Task<IEnumerable<TEntity>> GetAllAsync(
            Expression<Func<TEntity, bool>> filter,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> includes);

        // Paging - Get Entities by page number.
        Task<IEnumerable<TEntity>> QueryPageAsync(
            int? skip,
            int? take,
            Expression<Func<TEntity, bool>> filters,
            Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> orderBy,
            Func<IQueryable<TEntity>, IQueryable<TEntity>> includes);

        // Paging - Count records
        Task<int> CountAsync(Expression<Func<TEntity, bool>> filter);

        Task<IEnumerable<TEntity>> ListAsync(BaseListQueryModel query);
    }
}
