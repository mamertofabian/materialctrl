import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialListComponent } from './manage/materialList.component';
import { DataService } from './shared/dataService';
import { ThemeModule } from './theme/theme.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsComponent } from './materials/materials.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { AppRoutingModule } from './app-routing.module';
import { ReceivingComponent } from './receiving/receiving.component';

@NgModule({
    declarations: [
        AppComponent,
        MaterialListComponent,
        NavbarComponent,
        DashboardComponent,
        MaterialsComponent,
        SuppliersComponent,
        ReceivingComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AgGridModule.withComponents([]),
        BrowserAnimationsModule,
        ThemeModule
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
