using MaterialCtrl.Entities;
using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.ViewModels {
    public class OrderItemViewModel {
        public int Id { get; set; }
        [Required]
        public int Quantity { get; set; }
        [Required]
        public decimal UnitPrice { get; set; }
        [Required]
        public int MaterialId { get; set; }
        public string MaterialName { get; set; }
        public string MaterialDescription { get; set; }
        public UnitType MaterialUnit { get; set; }
        public User MaterialCreatedBy { get; set; }
    }
}