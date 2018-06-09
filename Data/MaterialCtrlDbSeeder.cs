using MaterialCtrl.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Data {
    public class MaterialCtrlDbSeeder {
        private MaterialCtrlDbContext _context;

        public MaterialCtrlDbSeeder(MaterialCtrlDbContext context) {
            _context = context;
        }

        public void Seed() {
            _context.Database.EnsureCreated();

            if (!_context.Projects.Any()) {
                // need to create sample data
                var projects = new List<Project> {
                    new Project{Name = "Base project"}
                };

                _context.Projects.AddRange(projects);
                _context.SaveChanges();
            }
        }
    }
}
