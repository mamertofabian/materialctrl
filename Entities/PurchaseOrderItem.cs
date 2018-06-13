using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Entities
{
    public class PurchaseOrderItem
    {
        public int Id { get; set; }
        public Material Material { get; set; }
        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public PurchaseOrder Order { get; set; }
    }
}
