using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace HRM.WebUI.Controllers
{
    public class AppController : Controller
    {
        private readonly IConfiguration _configuration;

        public AppController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public IActionResult Index()
        {
            return View(BuildAppViewModel());
        }

        public AppViewModel BuildAppViewModel()
        {
            return new AppViewModel()
            {
                ApiHost = _configuration.GetValue<string>("ApiHost")
            };
        }
    }

    public class AppViewModel
    {
        public string ApiHost { get; set; }
    }
}
