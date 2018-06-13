using AutoMapper;
using MaterialCtrl.Entities;
using MaterialCtrl.Services;
using MaterialCtrl.ViewModels;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Controllers
{
    [Route("/api/purchaseorders/{orderid}/items")]
    public class PurchaseOrderItemsController : Controller
    {
        private readonly IPurchaseOrderRepository _orderRepository;
        private readonly ILogger<PurchaseOrderItemsController> _logger;
        private readonly IMapper _mapper;

        public PurchaseOrderItemsController(IPurchaseOrderRepository orderRepository, 
            ILogger<PurchaseOrderItemsController> logger, IMapper mapper) {
            _orderRepository = orderRepository;
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        public IActionResult Get(int orderId) {
            var order = _orderRepository.GetOrderById(orderId);
            if (order != null) {
                return Ok(_mapper.Map<IEnumerable<PurchaseOrderItem>, 
                    IEnumerable<PurchaseOrderItemViewModel>>(order.Items));
            }
            else {
                return NotFound();
            }
        }

        [HttpGet("{id}")]
        public IActionResult Get(int orderId, int id) {
            var order = _orderRepository.GetOrderById(orderId);
            if (order != null) {
                var item = order.Items.Where(i => i.Order.Id == id).FirstOrDefault();
                if (item != null) {
                    return Ok(_mapper.Map<PurchaseOrderItem, PurchaseOrderItemViewModel>(item)); 
                }

                return NotFound();
            }
            else {
                return NotFound();
            }
        }
    }
}
