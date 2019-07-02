using System;

namespace HRM.Application.Infrastructure.ViewModel
{
    public abstract class BaseViewModel
    {
        public int Id { get; set; }
        public string RowVersion { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedUser { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string UpdatedUser { get; set; }

        public abstract void Validate();

        public virtual void Audit(string user)
        {
            var utcNow = DateTime.UtcNow;

            if (Id <= 0)
            {
                CreatedUser = user;
                CreatedDate = utcNow;
            }

            UpdatedUser = user;
            UpdatedDate = utcNow;

            AuditChildren(user);
        }

        protected virtual void AuditChildren(string user)
        {
        }
    }
}
