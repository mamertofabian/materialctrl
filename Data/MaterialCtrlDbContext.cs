using MaterialCtrl.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace MaterialCtrl.Data {
    public class MaterialCtrlDbContext : IdentityDbContext<User>
    {
        public MaterialCtrlDbContext(DbContextOptions options) : base(options) {
        }
        public DbSet<Project> Projects { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<UnitType> UnitTypes { get; set; }
        public DbSet<PurchaseOrder> PurchaseOrders { get; set; }
    }
}
