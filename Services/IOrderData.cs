using MaterialCtrl.Entities;
using System.Collections.Generic;

namespace MaterialCtrl.Services {
    public interface IOrderData
    {
        IEnumerable<Order> GetAll();
        Order Get(int id);
        Order Add(Order order);
        Order Update(Order order);
    }
}
