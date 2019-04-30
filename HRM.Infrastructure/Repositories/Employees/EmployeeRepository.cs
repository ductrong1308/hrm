using HRM.Domain.Entities;
using HRM.Persistence.Context;

namespace HRM.Infrastructure.Repositories.Employees
{
    public class EmployeeRepository: Repository<HRMContext, Employee>
    {
        public EmployeeRepository(HRMContext context): base(context) { }
    }
}
