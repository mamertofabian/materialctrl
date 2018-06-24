using MaterialCtrl.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Services
{
    public interface IProjectRepository
    {
        IEnumerable<Project> GetAll();
        Project Get(int id);
        Project Add(Project project);
        Project Update(Project project);
    }
}
