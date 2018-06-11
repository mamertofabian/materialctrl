﻿using MaterialCtrl.Entities;
using MaterialCtrl.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MaterialCtrl.Controllers {
    public class AccountController : Controller {
        private readonly ILogger<AccountController> _logger;
        private SignInManager<User> _signInManager;

        public AccountController(ILogger<AccountController> logger, SignInManager<User> signInManager) {
            _logger = logger;
            _signInManager = signInManager;
        }

        public IActionResult Login() {
            if (this.User.Identity.IsAuthenticated) {
                return RedirectToAction("Index", "Home");
            }

            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(LoginViewModel model) {
            if (ModelState.IsValid) {
                var result = await _signInManager.PasswordSignInAsync(model.UserName,
                    model.Password, model.RememberMe, false);

                if (result.Succeeded) {
                    if (Request.Query.Keys.Contains("ReturnUrl")) {
                        return Redirect(Request.Query["ReturnUrl"].First());
                    }
                    else {
                        return RedirectToAction("Index", "Manage");
                    }
                }
            }

            ModelState.AddModelError("", "Failed to login");

            return View();
        }

        [HttpGet]
        public async Task<IActionResult> Logout() {
            await _signInManager.SignOutAsync();
            return RedirectToAction("Index", "Home");
        }
    }
}