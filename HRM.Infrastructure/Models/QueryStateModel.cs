using System;
using System.Collections.Generic;
using System.Text;
using HRM.Common.Constants;

namespace HRM.Infrastructure.Models
{
    public class QueryStateModel
    {
        public QueryStateModel()
        {
            this.Skip = HRMConstants.DEFAULT_PAGE_QUERY_SKIP;
            this.Take = HRMConstants.DEFAULT_PAGE_QUERY_TAKE;
        }

        public int Skip { get; set; }

        public int Take { get; set; }

        public List<SortData> Sort { get; set; }

        public FilterData Filter { get; set; }
    }

    public class SortData
    {
        public string Dir { get; set; }

        public string Field { get; set; }

        public SortData(string field, string dir)
        {
            Field = field;
            Dir = dir;
        }
    }

    public class FilterData
    {
        public List<FilterItem> Filters { get; set; }

        public string Logic { get; set; }
    }

    public class FilterItem
    {
        public string Field { get; set; }

        public string Operator { get; set; }

        public string Value { get; set; }
    }
}
