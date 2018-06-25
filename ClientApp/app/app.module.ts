import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { MaterialsModule } from './materials/materials.module';
import { ProjectsModule } from './projects/projects.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SuppliersModule } from './suppliers/suppliers.module';
import { ReceivingModule } from './receiving/receiving.module';
import { AppRoutingModule } from './app-routing.module';
import { NavbarModule } from './navbar/navbar.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        SharedModule,
        CoreModule,
        MaterialsModule,
        ProjectsModule,
        DashboardModule,
        SuppliersModule,
        ReceivingModule,
        NavbarModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
