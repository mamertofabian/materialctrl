﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.ViewModels
{
    public class PurchaseOrderViewModel
    {
        public int OrderId { get; set; }
        public DateTime OrderDate { get; set; }
        [Required, MinLength(4)]
        public string OrderNumber { get; set; }
        public ICollection<PurchaseOrderItemViewModel> Items { get; set; }
    }
}
