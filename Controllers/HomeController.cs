using MaterialCtrl.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProjectData _projectData;

        public HomeController(IProjectData projectData) {
            _projectData = projectData;
        }
        public IActionResult Index() {
            var model = _projectData.GetAll();
            return View(model);
        }
    }
}
