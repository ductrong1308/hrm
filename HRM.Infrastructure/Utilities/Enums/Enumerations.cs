using System;
using System.Collections.Generic;
using System.Text;

namespace HRM.Infrastructure.Utilities.Enums
{
    public class Enumerations
    {
        public enum FilterStatementConnector
        {
            And,
            Or
        }

        public enum Operation
        {
            Equals,
            Contains,
            StartsWith,
            EndsWith,
            NotEquals,
            GreaterThan,
            GreaterThanOrEquals,
            LessThan,
            LessThanOrEquals,
            DoesNotContains,
            IsNull,
            IsNotNull,
            IsEmpty,
            IsNotEmpty
        }
    }
}
