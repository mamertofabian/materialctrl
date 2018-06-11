using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MaterialCtrl.Controllers {
    [Authorize]
    public class ManageController : Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}
