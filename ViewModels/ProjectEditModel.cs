using System.ComponentModel.DataAnnotations;

namespace MaterialCtrl.ViewModels {
    public class ProjectEditModel {
        [Display(Name = "Project Name")]
        [Required, MaxLength(80)]
        public string Name { get; set; }
        // other fields that are required when inserting or editing the model
    }
}
