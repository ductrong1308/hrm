namespace HRM.Infrastructure.Utilities.Builder
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text.RegularExpressions;
    using HRM.Infrastructure.Models;

    public static class SearchCriteriaBuilder
    {
        public static List<DynamicQueryModel> GetSearchCriteriaModel(string source)
        {
            source = source.Replace("contains", string.Empty);
            source = Regex.Replace(source, "[^0-9a-zA-Z ,]+", string.Empty);

            string[] stringSeparators = new string[] { "and" };
            string[] results = source.Split(stringSeparators, StringSplitOptions.None);

            List<DynamicQueryModel> dynamicSearchList = new List<DynamicQueryModel>();

            foreach (var result in results)
            {
                DynamicQueryModel searchModel = new DynamicQueryModel();
                var searchCriteria = result.Split(',');
                if (searchCriteria.Length > 1)
                {
                    var searchData = searchCriteria[1].Trim();
                    if (!string.IsNullOrEmpty(searchData))
                    {
                        var originalString = searchCriteria[0].Trim();
                        searchModel.PropertyName = originalString.First().ToString().ToUpper() + originalString.Substring(1);
                        searchModel.SearchData = searchData;

                        dynamicSearchList.Add(searchModel);
                    }
                }
            }

            return dynamicSearchList;
        }
    }
}
