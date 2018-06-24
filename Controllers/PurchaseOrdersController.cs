using AutoMapper;
using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using MaterialCtrl.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MaterialCtrl.Controllers {
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class PurchaseOrdersController : Controller
    {
        private readonly IPurchaseOrderRepository _orderRepository;
        private readonly ILogger<PurchaseOrdersController> _logger;
        private readonly IMapper _mapper;
        private readonly UserManager<User> _userManager;

        public PurchaseOrdersController(IPurchaseOrderRepository orderRepository, 
            ILogger<PurchaseOrdersController> logger, IMapper mapper,
            UserManager<User> userManager) {
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true) {
            try {
                var results = _orderRepository.GetAllOrders(includeItems);
                return base.Ok(_mapper.Map<IEnumerable<PurchaseOrder>, 
                    IEnumerable<PurchaseOrderViewModel>>(results));
            }
            catch (Exception ex) {
                const string error = "Failed to get orders";
                _logger.LogError($"{error} : {ex}");
                return base.BadRequest(error);
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id) {
            try {
                var order = _orderRepository.GetOrderById(id);
                if (order != null) {
                    return Ok(_mapper.Map<PurchaseOrder, PurchaseOrderViewModel>(order));
                }
                else {
                    return NotFound();
                }
            }
            catch (Exception ex) {
                const string error = "Failed to get purchase order";
                _logger.LogError($"{error} : {ex}");
                return base.BadRequest(error);
            }
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] PurchaseOrderViewModel model) {
            const string error = "Failed to save a new order";

            try {
                if (ModelState.IsValid) {
                    var newOrder = _mapper.Map<PurchaseOrderViewModel, PurchaseOrder>(model);

                    if (newOrder.OrderDate == DateTime.MinValue) {
                        newOrder.OrderDate = DateTime.Now;
                    }

                    var currentUser = await _userManager.FindByNameAsync(User.Identity.Name);
                    newOrder.User = currentUser;

                    newOrder = _orderRepository.AddOrder(newOrder);

                    return Created($"/api/orders/{newOrder.Id}", 
                        _mapper.Map<PurchaseOrder, PurchaseOrderViewModel>(newOrder));
                }
                else {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex) {
                _logger.LogError($"{error} : {ex}");
            };

            return base.BadRequest(error);
        }
    }
}
