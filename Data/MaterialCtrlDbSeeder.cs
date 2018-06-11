using MaterialCtrl.Entities;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MaterialCtrl.Data {
    public class MaterialCtrlDbSeeder {
        private MaterialCtrlDbContext _context;
        private UserManager<User> _userManager;

        public MaterialCtrlDbSeeder(MaterialCtrlDbContext context, UserManager<User> userManager) {
            _context = context;
            _userManager = userManager;
        }

        public async Task Seed() {
            _context.Database.EnsureCreated();

            var user = await _userManager.FindByEmailAsync("admin@materialctrl.com");
            if (user == null) {
                user = new User {
                    FirstName = "Admin",
                    LastName = "User",
                    UserName = "admin@materialctrl.com",
                    Email = "admin@materialctrl.com"
                };

                var result = await _userManager.CreateAsync(user, "P@ssw0rd!");

                if (result != IdentityResult.Success) {
                    throw new InvalidOperationException("Failed to create the default user");
                }
            }

            if (!_context.Projects.Any()) {
                var projects = new List<Project> {
                    new Project { Name = "Base project" }
                };

                _context.Projects.AddRange(projects);
                _context.SaveChanges();
            }

            if (!_context.UnitTypes.Any()) {
                var unitTypes = new List<UnitType> {
                    new UnitType { Name="Piece", PluralName = "Pieces", Abbreviation = "Pc", PluralAbbreviation = "Pcs" },
                    new UnitType { Name="Box", PluralName = "Boxes", Abbreviation="Bx", PluralAbbreviation = "Bxs" },
                    new UnitType { Name="Liter", PluralName = "Liters", Abbreviation = "L" },
                    new UnitType { Name="Meter", PluralName = "Meters", Abbreviation = "M" },
                    new UnitType { Name="Kilogram", PluralName = "Kilograms", Abbreviation = "Kg" }
                };

                _context.UnitTypes.AddRange(unitTypes);
                _context.SaveChanges();
            }
        }
    }
}
