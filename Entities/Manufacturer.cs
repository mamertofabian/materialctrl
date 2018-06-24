using System;

namespace MaterialCtrl.Entities
{
    public class Manufacturer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Notes { get; set; }
        public DateTime CreatedOn { get; set; }
        public User CreatedBy { get; set; }
        public DateTime ModifiedOn { get; set; }
        public User ModifiedBy { get; set; }
    }
}