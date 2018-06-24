using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.Entities {
    public class Project {
        public int Id { get; set; }
        [Display(Name = "Project Name")]
        [Required, MaxLength(80)]
        public string Name { get; set; }
    }
}
