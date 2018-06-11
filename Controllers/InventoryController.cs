using Microsoft.AspNetCore.Mvc;

namespace MaterialCtrl.Controllers {
    public class InventoryController : Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}
