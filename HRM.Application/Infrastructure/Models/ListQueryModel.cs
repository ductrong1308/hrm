using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Application.Infrastructure.Models
{
    public class ListQueryModel
    {
        public int Skip { get; set; }

        public int Take { get; set; }

        public List<ListSort> Sort { get; set; }

        public ListFilter Filter { get; set; }
    }

    public class ListSort
    {
        public string Dir { get; set; }

        public string Field { get; set; }

        public ListSort(string field, string dir)
        {
            Field = field;
            Dir = dir;
        }
    }

    public class ListFilter
    {
        public List<ListFilterCriteria> Filters { get; set; }

        public string Logic { get; set; }
    }

    public class ListFilterCriteria
    {
        public string Field { get; set; }

        public string Operator { get; set; }

        public string Value { get; set; }
    }
}
