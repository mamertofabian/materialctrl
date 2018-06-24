using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using MaterialCtrl.ViewModels;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MaterialCtrl.Controllers {
    [Authorize]
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

        public IActionResult Details(int id) {
            var model = _projectData.Get(id);

            if (model == null) {
                //return Content($"Project with id: {id} is not found");
                return RedirectToAction(nameof(Index));  // this is fine because the users won't typically type the project id themselves
            }
            else {
                return View(model);
            }
        }

        [HttpGet]
        public IActionResult Create() {
            return View();
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Create(ProjectEditModel model) {
            if (ModelState.IsValid) {
                var newProject = new Project();
                newProject.Name = model.Name;

                newProject = _projectData.Add(newProject);

                return RedirectToAction(nameof(Details), new { id = newProject.Id });
            }
            else {
                return View();
            }
        }
    }
}
