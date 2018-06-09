using MaterialCtrl.Entities;
using Microsoft.EntityFrameworkCore;

namespace MaterialCtrl.Data {
    public class MaterialCtrlDbContext : DbContext
    {
        public MaterialCtrlDbContext(DbContextOptions options) : base(options) {
        }
        public DbSet<Project> Projects { get; set; }
    }
}
