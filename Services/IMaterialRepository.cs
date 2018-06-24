using MaterialCtrl.Entities;
using System.Collections.Generic;

namespace MaterialCtrl.Services {
    public interface IMaterialRepository
    {
        IEnumerable<Material> GetAll();
        Material Get(int id);
        Material Add(Material material);
        Material Update(Material material);
    }
}
