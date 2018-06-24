using MaterialCtrl.Entities;
using System.Collections.Generic;

namespace MaterialCtrl.ViewModels {
    public class HomeIndexViewModel
    {
        public IEnumerable<Project> Projects { get; set; }
        public string CurrentMessage { get; set; }
    }
}
