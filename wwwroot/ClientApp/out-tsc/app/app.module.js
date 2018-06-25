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
var dataService_1 = require("./shared/dataService");
var appUi_module_1 = require("./appUi/appUi.module");
var materials_module_1 = require("./materials/materials.module");
var projects_module_1 = require("./projects/projects.module");
var navbar_component_1 = require("./navbar/navbar.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var suppliers_component_1 = require("./suppliers/suppliers.component");
var app_routing_module_1 = require("./app-routing.module");
var receiving_component_1 = require("./receiving/receiving.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                dashboard_component_1.DashboardComponent,
                suppliers_component_1.SuppliersComponent,
                receiving_component_1.ReceivingComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                appUi_module_1.AppUiModule,
                materials_module_1.MaterialsModule,
                projects_module_1.ProjectsModule
            ],
            providers: [
                dataService_1.DataService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map