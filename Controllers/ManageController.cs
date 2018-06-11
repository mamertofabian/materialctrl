using Microsoft.AspNetCore.Mvc;

namespace MaterialCtrl.Controllers {
    public class ManageController : Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}
