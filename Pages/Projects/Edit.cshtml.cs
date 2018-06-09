using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MaterialCtrl.Pages.Projects {
    public class EditModel : PageModel {
        private IProjectData _projectData;

        [BindProperty]
        public Project Project { get; set; }

        public EditModel(IProjectData projectData) {
            _projectData = projectData;
        }

        public IActionResult OnGet(int id) {
            Project = _projectData.Get(id);

            if (Project == null) {
                return RedirectToAction("Index", "Home");
            }

            return Page();
        }

        public IActionResult OnPost() {
            if (ModelState.IsValid) {
                _projectData.Update(Project);

                return RedirectToAction("Details", "Home", new { id = Project.Id });
            }

            return Page();
        }
    }
}