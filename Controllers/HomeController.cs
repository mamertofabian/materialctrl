using MaterialCtrl.Services;
using MaterialCtrl.ViewModels;
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
        private readonly IGreeter _greeter;

        public HomeController(IProjectData projectData, IGreeter greeter) {
            _projectData = projectData;
            _greeter = greeter;
        }
        public IActionResult Index() {
            var model = new HomeIndexViewModel();
            model.Projects = _projectData.GetAll();
            model.CurrentMessage = _greeter.GetMessageOfTheDay();
            return View(model);
        }
    }
}
