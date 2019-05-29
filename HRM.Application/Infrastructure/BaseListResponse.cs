using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Application.Infrastructure
{
    public class BaseListResponse<TModel>
    {
        public List<TModel> ListResult { get; set; }

        public int ListCount { get; set; }
    }
}
