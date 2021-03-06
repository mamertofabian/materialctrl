﻿using MaterialCtrl.Data;
using MaterialCtrl.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;

namespace MaterialCtrl.Services {
    public class MaterialRepository : IMaterialRepository
    {
        private readonly MaterialCtrlDbContext _context;
        private readonly ILogger<MaterialRepository> _logger;

        public MaterialRepository(MaterialCtrlDbContext context, ILogger<MaterialRepository> logger) {
            _context = context;
            _logger = logger;
        }

        public Material Add(Material material) {
            _context.Materials.Add(material);
            _context.SaveChanges();

            return material;
        }

        public Material Get(int id) {
            return _context.Materials.FirstOrDefault(p => p.Id == id);
        }

        public IEnumerable<Material> GetAll() {
            try {
                _logger.LogInformation("GetAll materials was called");
                return _context.Materials.OrderBy(p => p.PartName);
            }
            catch (Exception ex) {
                _logger.LogError($"Failed to get all materials: {ex}");
                return null;
            }
        }

        public void RemoveMaterialById(int id) {
            var material = this.Get(id);
            if (material != null) {
                _context.Materials.Remove(material);
                _context.SaveChanges();
            }
        }

        public Material Update(Material material) {
            _context.Attach(material).State = EntityState.Modified;
            _context.SaveChanges();

            return material;
        }
    }
}
