using System.Collections.Generic;
using System.Linq;
using MaterialCtrl.Data;
using MaterialCtrl.Entities;

namespace MaterialCtrl.Services {
    public class SqlProjectData : IProjectData {
        private readonly MaterialCtrlDbContext _context;

        public SqlProjectData(MaterialCtrlDbContext context) {
            _context = context;
        }

        public Project Add(Project project) {
            _context.Projects.Add(project);
            _context.SaveChanges();

            return project;
        }

        public Project Get(int id) {
            return _context.Projects.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Project> GetAll() {
            return _context.Projects.OrderBy(p => p.Name);
        }
    }
}
