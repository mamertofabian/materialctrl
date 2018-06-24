using System;
using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.Entities {
    public class Material
    {
        public int Id { get; set; }
        [Required, MaxLength(250)]
        public string PartNumber { get; set; }
        [Required, MaxLength(250)]
        public string PartName { get; set; }
        public int Revision { get; set; }
        public string Description { get; set; }
        public Category Category { get; set; }
        public UnitType Unit { get; set; }
        public Manufacturer Manufacturer { get; set; }
        public string ManufacturerItemNumber { get; set; }
        public ProcurementType ProcurementType { get; set; }
        public string Notes { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public User CreatedBy { get; set; }
        public User ModifiedBy { get; set; }
    }
}
