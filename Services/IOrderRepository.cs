using MaterialCtrl.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Services
{
    public interface IOrderRepository
    {
        IEnumerable<Order> GetAllOrders(bool includeItems);
        Order GetOrderById(int id);
        Order AddOrder(Order order);
        Order UpdateOrder(Order order);
    }
}
