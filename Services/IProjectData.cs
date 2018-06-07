using MaterialCtrl.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Services
{
    public interface IProjectData
    {
        IEnumerable<Project> GetAll();
    }
}
