using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Application.Infrastructure.ViewModel
{
    public class ListResponseViewModel<TModel>
    {
        public List<TModel> ListResult { get; set; }

        public int ListCount { get; set; }
    }
}
