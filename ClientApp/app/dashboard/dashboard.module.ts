import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppUiModule
  ],
  declarations: [
    DashboardComponent
  ], 
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
