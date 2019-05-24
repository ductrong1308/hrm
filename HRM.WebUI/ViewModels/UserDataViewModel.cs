using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRM.WebUI.ViewModels
{
    public class UserDataViewModel
    {
        public string UserName { get; set; }

        public string Role { get; set; }

        public UserTimeZone TimeZone { get; set; }

        public string PreferredLanguage { get; set; }
    }

    public class UserTimeZone
    {
        public string Value { get; set; }

        public decimal Offset { get; set; }

        public bool IsDst { get; set; }
    }
}
