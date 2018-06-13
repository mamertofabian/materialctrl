using MaterialCtrl.Data;
using MaterialCtrl.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MaterialCtrl.Services {
    public class PurchaseOrderRepository : IPurchaseOrderRepository {
        private readonly MaterialCtrlDbContext _context;
        private readonly ILogger<PurchaseOrderRepository> _logger;

        public PurchaseOrderRepository(MaterialCtrlDbContext context, ILogger<PurchaseOrderRepository> logger) {
            _context = context;
            _logger = logger;
        }

        public PurchaseOrder AddOrder(PurchaseOrder order) {
            _context.PurchaseOrders.Add(order);
            _context.SaveChanges();

            return order;
        }

        public PurchaseOrder GetOrderById(int id) {
            return _context.PurchaseOrders
                .Include(o => o.Items)
                .ThenInclude(i => i.Material)
                .Include(o => o.User)
                .FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<PurchaseOrder> GetAllOrders(bool includeItems) {
            try {
                _logger.LogInformation("GetAll orders was called");

                if (includeItems) {
                    return _context.PurchaseOrders
                                        .Include(o => o.Items)
                                        .ThenInclude(i => i.Material)
                                        .Include(o => o.User)
                                        .OrderBy(p => p.OrderDate);
                }
                else {
                    return _context.PurchaseOrders
                    .Include(o => o.User)
                    .OrderBy(p => p.OrderDate);
                }


            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get all orders: {ex}");
                return null;
            }
        }

        public PurchaseOrder UpdateOrder(PurchaseOrder order) {
            _context.Attach(order).State = EntityState.Modified;
            _context.SaveChanges();

            return order;
        }
    }
}
