using System;
using System.Collections.Generic;
using System.Text;
using HRM.Application.Infrastructure;
using HRM.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace HRM.Persistence.Context
{
    public class HRMContext: EntityContextBase<HRMContext>
    {
        public HRMContext(DbContextOptions<HRMContext> options)
            : base(options)
        {
        }

        public HRMContext()
        {
        }

        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
