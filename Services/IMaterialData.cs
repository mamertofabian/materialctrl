using MaterialCtrl.Entities;
using System.Collections.Generic;

namespace MaterialCtrl.Services {
    public interface IMaterialData
    {
        IEnumerable<Material> GetAll();
        Material Get(int id);
        Material Add(Material material);
        Material Update(Material material);
    }
}
