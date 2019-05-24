using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HRM.WebUI.ViewModels
{
    public class AppViewModel
    {
        public string ApiHost { get; set; }

        public UserDataViewModel User { get; set; }
    }
}
