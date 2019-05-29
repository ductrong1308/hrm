using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using HRM.Common.Constants;
using HRM.Common.Extensions;
using HRM.Infrastructure.Models;

namespace HRM.Infrastructure.Utilities.QueryExtensions
{
    public class OrderByQuery<TEntity> where TEntity : class
    {
        public Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> OrderByExpression { get; private set; }

        public OrderByQuery(Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> expression)
        {
            OrderByExpression = expression;
        }

        public OrderByQuery(List<SortData> sortByData, Dictionary<SortData, Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>> orderByColumnMaps = null)
        {
            var filteredSortByData = sortByData.Where(x => !string.IsNullOrEmpty(x.Dir)).ToList();
            foreach (var sortByItem in filteredSortByData)
            {
                var columnToSort = sortByItem.Field.ToPascalCase();
                if (orderByColumnMaps != null && orderByColumnMaps.ContainsKey(sortByItem))
                {
                    OrderByExpression += orderByColumnMaps[sortByItem];
                }
                else
                {
                    OrderByExpression += GetOrderBy(columnToSort,
                        sortByItem.Dir.ToLower().Equals(HRMConstants.ORDER_BY_DESC, StringComparison.OrdinalIgnoreCase));
                }
            }
        }

        public OrderByQuery(string columName, bool isOrderByDesc)
        {
            OrderByExpression = GetOrderBy(columName, isOrderByDesc);
        }

        private Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>> GetOrderBy(string columnName, bool isOrderByDesc)
        {
            Type typeQueryable = typeof(IQueryable<TEntity>);
            ParameterExpression argQueryable = Expression.Parameter(typeQueryable, "p");
            var outerExpression = Expression.Lambda(argQueryable, argQueryable);

            var entityType = typeof(TEntity);
            ParameterExpression arg = Expression.Parameter(entityType, "x");

            Expression expression = arg;
            string[] properties = columnName.Split('.');
            foreach (string propertyName in properties)
            {
                PropertyInfo propertyInfo = entityType.GetProperty(propertyName,
                    BindingFlags.IgnoreCase | BindingFlags.Public | BindingFlags.Instance);

                expression = Expression.Property(expression, propertyInfo);
                entityType = propertyInfo.PropertyType;
            }

            LambdaExpression lambda = Expression.Lambda(expression, arg);
            string methodName = isOrderByDesc ? HRMConstants.LINQ_TRANSLATED_ORDER_BY_DESC : HRMConstants.LINQ_TRANSLATED_ORDER_BY_ASC;

            MethodCallExpression resultExp = Expression.Call(
                typeof(Queryable),
                methodName,
                new Type[] { typeof(TEntity), entityType },
                outerExpression.Body,
                System.Linq.Expressions.Expression.Quote(lambda));

            var finalLambda = Expression.Lambda(resultExp, argQueryable);

            return (Func<IQueryable<TEntity>, IOrderedQueryable<TEntity>>)finalLambda.Compile();
        }
    }
}
