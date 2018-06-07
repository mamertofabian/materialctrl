using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MaterialCtrl.Models;

namespace MaterialCtrl.Services
{
    public class InMemoryProjectData : IProjectData {
        private List<Project> _projectData;

        public InMemoryProjectData() {
            _projectData = new List<Project> {
                new Project{ Id = 1, Name = "Tank project"},
                new Project{ Id = 2, Name = "Roof project"}
            };
        }

        public IEnumerable<Project> GetAll() {
            return _projectData.OrderBy(p => p.Name);
        }
    }
}
