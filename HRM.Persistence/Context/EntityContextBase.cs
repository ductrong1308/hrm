using HRM.Application.Infrastructure.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace HRM.Persistence.Context
{
    public class EntityContextBase<TContext> : DbContext, IEntityContext
        where TContext: DbContext
    {
        public EntityContextBase(DbContextOptions<TContext> options): base(options)
        {

        }

        public EntityContextBase()
        {

        }
    }
}
