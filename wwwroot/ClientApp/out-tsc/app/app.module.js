"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var shared_module_1 = require("./shared/shared.module");
var core_module_1 = require("./core/core.module");
var materials_module_1 = require("./materials/materials.module");
var projects_module_1 = require("./projects/projects.module");
var dashboard_module_1 = require("./dashboard/dashboard.module");
var suppliers_module_1 = require("./suppliers/suppliers.module");
var receiving_module_1 = require("./receiving/receiving.module");
var app_routing_module_1 = require("./app-routing.module");
var navbar_module_1 = require("./navbar/navbar.module");
var notifications_module_1 = require("./notifications/notifications.module");
var prompt_module_1 = require("./prompt/prompt.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                shared_module_1.SharedModule,
                core_module_1.CoreModule,
                materials_module_1.MaterialsModule,
                projects_module_1.ProjectsModule,
                dashboard_module_1.DashboardModule,
                suppliers_module_1.SuppliersModule,
                receiving_module_1.ReceivingModule,
                navbar_module_1.NavbarModule,
                notifications_module_1.NotificationsModule,
                prompt_module_1.PromptModule
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map