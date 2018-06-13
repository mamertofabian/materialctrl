using MaterialCtrl.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Services
{
    public interface IPurchaseOrderRepository
    {
        IEnumerable<PurchaseOrder> GetAllOrders(bool includeItems);
        PurchaseOrder GetOrderById(int id);
        PurchaseOrder AddOrder(PurchaseOrder order);
        PurchaseOrder UpdateOrder(PurchaseOrder order);
    }
}
