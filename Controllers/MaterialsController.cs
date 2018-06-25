using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;

namespace MaterialCtrl.Controllers {
    [Route("api/[Controller]")]
    public class MaterialsController : Controller {
        private readonly IMaterialRepository _materialData;
        private readonly ILogger<MaterialsController> _logger;

        public MaterialsController(IMaterialRepository materialData, ILogger<MaterialsController> logger) {
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

        [HttpPost]
        public IActionResult Post([FromBody]Material model) {
            try {
                model.CreatedOn = DateTime.Now;
                var material = _materialData.Add(model);

                _logger.LogInformation($"created /api/materials/{material.Id}");
                return Created($"/api/materials/{material.Id}", material);
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to save a new material: {ex}");
            }

            return BadRequest("Failed to save new material");
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id) {
            try {
                _materialData.RemoveMaterialById(id);

                _logger.LogInformation($"Delete /api/materials/{id}");
                return Ok();
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to delete the material: {ex}");
            }

            return BadRequest("Failed to delete the material");
        }
    }
}
