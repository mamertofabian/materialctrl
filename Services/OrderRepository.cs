using MaterialCtrl.Data;
using MaterialCtrl.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MaterialCtrl.Services {
    public class OrderRepository : IOrderRepository {
        private readonly MaterialCtrlDbContext _context;
        private readonly ILogger<OrderRepository> _logger;

        public OrderRepository(MaterialCtrlDbContext context, ILogger<OrderRepository> logger) {
            _context = context;
            _logger = logger;
        }

        public Order AddOrder(Order order) {
            _context.Orders.Add(order);
            _context.SaveChanges();

            return order;
        }

        public Order GetOrderById(int id) {
            return _context.Orders
                .Include(o => o.Items)
                .ThenInclude(i => i.Material)
                .Include(o => o.User)
                .FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Order> GetAllOrders(bool includeItems) {
            try {
                _logger.LogInformation("GetAll orders was called");

                if (includeItems) {
                    return _context.Orders
                                        .Include(o => o.Items)
                                        .ThenInclude(i => i.Material)
                                        .Include(o => o.User)
                                        .OrderBy(p => p.OrderDate);
                }
                else {
                    return _context.Orders
                    .Include(o => o.User)
                    .OrderBy(p => p.OrderDate);
                }


            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get all orders: {ex}");
                return null;
            }
        }

        public Order UpdateOrder(Order order) {
            _context.Attach(order).State = EntityState.Modified;
            _context.SaveChanges();

            return order;
        }
    }
}
