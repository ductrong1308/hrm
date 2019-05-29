using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using HRM.Common.Constants;
using HRM.Common.Extensions;
using HRM.Infrastructure.Models;
using HRM.Infrastructure.Utilities.Builder;
using static HRM.Infrastructure.Utilities.Enums.Enumerations;

namespace HRM.Infrastructure.Utilities.QueryExtensions
{
    public class FilterQuery<TEntity> where TEntity : class
    {
        public Expression<Func<TEntity, bool>> FilterExpression { get; private set; }

        public FilterQuery(Expression<Func<TEntity, bool>> expression)
        {
            FilterExpression = expression;
        }

        public FilterQuery(FilterData filterRequest, Dictionary<string, string> filterMaps = null)
        {
            FilterExpression = BuildExpression(filterRequest, filterMaps);
        }

        public virtual Dictionary<string, Operation> OperationDictionary
        {
            get
            {
                return new Dictionary<string, Operation>()
                {
                    { "contains", Operation.Contains },
                    { "startswith", Operation.StartsWith },
                    { "endswith", Operation.EndsWith },
                    { "gt", Operation.GreaterThan },
                    { "gte", Operation.GreaterThanOrEquals },
                    { "lt", Operation.LessThan },
                    { "lte", Operation.LessThanOrEquals },
                    { "eq", Operation.Equals },
                    { "neq", Operation.NotEquals },
                    { "doesnotcontain", Operation.DoesNotContains },
                    { "isnull", Operation.IsNull },
                    { "isnotnull", Operation.IsNotNull },
                    { "isempty", Operation.IsEmpty },
                    { "isnotempty", Operation.IsNotEmpty }
                };
            }
        }

        public void Filter(FilterData filters, Dictionary<string, string> filterMaps = null)
        {
            FilterExpression = BuildExpression(filters, filterMaps);
        }

        public Expression<Func<TEntity, bool>> BuildExpression(FilterData filters, Dictionary<string, string> filterMaps)
        {
            var filter = new Filter<TEntity>();
            foreach (var filterDetails in filters.Filters)
            {
                FilterStatementConnector connectLogic = string.Equals(filters.Logic.ToLower(), HRMConstants.FILTER_LOGIC_OR) 
                    ? FilterStatementConnector.Or : FilterStatementConnector.And;

                filter.By(
                    filterDetails.Field.ToPascalCase(), 
                    this.OperationDictionary[filterDetails.Operator.ToLowerInvariant()], 
                    filterDetails.Value, 
                    connectLogic);
            }

            return filter.BuildExpression();
        }
    }
}
