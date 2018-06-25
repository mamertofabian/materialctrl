import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { DashboardComponent } from './dashboard.component';

@NgModule({
  imports: [
    SharedModule,
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
