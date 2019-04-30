using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Domain.Base
{
    public class BaseEntity : Entity
    {
        public string CreatedUser { get; set; }

        public DateTime CreatedDate { get; set; }

        public string UpdatedUser { get; set; }

        public DateTime UpdatedDate { get; set; }


        public virtual void Audit(string user)
        {
            var utcNow = DateTime.UtcNow;

            if (this.Id <= 0)
            {
                this.CreatedUser = user;
                this.CreatedDate = utcNow;
            }

            this.UpdatedUser = user;
            this.UpdatedDate = utcNow;

            this.AuditChildren(user);
        }

        public virtual void AuditChildren(string user)
        {
            return;
        }
    }
}
