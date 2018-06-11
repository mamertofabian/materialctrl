using MaterialCtrl.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace MaterialCtrl.Controllers {
    [Route("api/[Controller]")]
    public class MaterialsController : Controller {
        private readonly IMaterialData _materialData;
        private readonly ILogger<MaterialsController> _logger;

        public MaterialsController(IMaterialData materialData, ILogger<MaterialsController> logger) {
            _materialData = materialData;
            _logger = logger;
        }

        [HttpGet]
        public IActionResult Get() {
            try {
                return Ok(_materialData.GetAll());
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get materials: {ex}");
                return BadRequest("Failed to get materials");
            }
        }
    }
}
