using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Entities
{
    public class PurchaseOrder
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public ICollection<PurchaseOrderItem> Items { get; set; }
        public User User { get; set; }
    }
}
