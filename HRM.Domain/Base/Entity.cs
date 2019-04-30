using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace HRM.Domain.Base
{
    public class Entity
    {
        [Key]
        public int Id { get; set; }

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}
