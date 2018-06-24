using System.Collections.Generic;
using System.Linq;
using MaterialCtrl.Data;
using MaterialCtrl.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace MaterialCtrl.Services {
    public class ProjectRepository : IProjectRepository {
        private readonly MaterialCtrlDbContext _context;
        private readonly ILogger<ProjectRepository> _logger;

        public ProjectRepository(MaterialCtrlDbContext context, ILogger<ProjectRepository> logger) {
            _context = context;
            _logger = logger;
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
            try {
                _logger.LogInformation("GetAll projects was called");
                return _context.Projects.OrderBy(p => p.Name);
            }
            catch (System.Exception ex) {
                _logger.LogError($"Failed to get all projects: {ex}");
                return null;
            }
        }

        public Project Update(Project project) {
            _context.Attach(project).State = EntityState.Modified;
            _context.SaveChanges();

            return project;
        }
    }
}
