using AutoMapper;
using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using MaterialCtrl.ViewModels;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;

namespace MaterialCtrl.Controllers {
    [Route("api/[Controller]")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : Controller
    {
        private readonly IOrderRepository _orderRepository;
        private readonly ILogger<OrdersController> _logger;
        private readonly IMapper _mapper;

        public OrdersController(IOrderRepository orderRepository, ILogger<OrdersController> logger, IMapper mapper) {
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(bool includeItems = true) {
            try {
                var results = _orderRepository.GetAllOrders(includeItems);
                return base.Ok(_mapper.Map<IEnumerable<Order>, IEnumerable<OrderViewModel>>(results));
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get orders : {ex}");
                return BadRequest("Failed to get orders");
            }
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id) {
            try {
                var order = _orderRepository.GetOrderById(id);
                if (order != null) {
                    return Ok(_mapper.Map<Order, OrderViewModel>(order));
                }
                else {
                    return NotFound();
                }
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get order : {ex}");
                return BadRequest("Failed to get order");
            }
        }

        [HttpPost]
        public IActionResult Post([FromBody] OrderViewModel model) {
            try {
                if (ModelState.IsValid) {
                    var newOrder = _mapper.Map<OrderViewModel, Order>(model);

                    if (newOrder.OrderDate == DateTime.MinValue) {
                        newOrder.OrderDate = DateTime.Now;
                    }

                    newOrder = _orderRepository.AddOrder(newOrder);

                    return Created($"/api/orders/{newOrder.Id}", 
                        _mapper.Map<Order, OrderViewModel>(newOrder));
                }
                else {
                    return BadRequest(ModelState);
                }
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to save a new order : {ex}");
            };

            return BadRequest("Failed to save a new order");
        }
    }
}
