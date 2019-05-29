using System;
using System.Threading.Tasks;
using HRM.Domain.Base;

namespace HRM.Application.Infrastructure.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IRepository<TEntity> Repository<TEntity>() where TEntity : BaseEntity;

        Task<int> Commit();

        Task Rollback();
    }
}
