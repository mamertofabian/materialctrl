using System;
using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.Entities {
    public class Material
    {
        public int Id { get; set; }
        [Required, MaxLength(250)]
        public string Name { get; set; }
        public string Description { get; set; }
        public UnitType Unit { get; set; }
        public DateTime CreatedOn { get; set; }
        public DateTime ModifiedOn { get; set; }
        public User CreatedBy { get; set; }
        public User ModifiedBy { get; set; }
    }
}
