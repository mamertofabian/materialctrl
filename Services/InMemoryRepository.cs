using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MaterialCtrl.Entities;

namespace MaterialCtrl.Services
{
    public class InMemoryRepository : IProjectRepository
    {
        private List<Project> _projects;

        public InMemoryRepository()
        {
            _projects = new List<Project> {
                new Project{ Id = 1, Name = "Tank project"},
                new Project{ Id = 2, Name = "Roof project"}
            };
        }

        public Project Add(Project project)
        {
            project.Id = _projects.Max(p => p.Id) + 1;
            _projects.Add(project);

            return project;
        }

        public Project Get(int id)
        {
            return _projects.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Project> GetAll()
        {
            return _projects.OrderBy(p => p.Name);
        }

        public Project Update(Project project)
        {
            throw new NotImplementedException();
        }
    }
}
