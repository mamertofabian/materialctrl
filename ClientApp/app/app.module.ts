import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DataService } from './shared/dataService';
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
        MaterialsModule,
        ProjectsModule,
        DashboardModule,
        SuppliersModule,
        ReceivingModule,
        NavbarModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
