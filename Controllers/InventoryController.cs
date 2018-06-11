using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace MaterialCtrl.Controllers {
    [Authorize]
    public class InventoryController : Controller
    {
        public IActionResult Index() {
            return View();
        }
    }
}
