using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.Entities {
    public class UnitType {
        public int Id { get; set; }
        [Required, MaxLength(20)]
        [Display(Name="Unit")]
        public string Name { get; set; }
        public string Abbreviation { get; set; }
        public string PluralName { get; internal set; }
        public string PluralAbbreviation { get; internal set; }
    }
}