import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReceivingRoutingModule } from './receiving-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { ReceivingComponent } from './receiving.component';

@NgModule({
  imports: [
    CommonModule,
    ReceivingRoutingModule,
    AppUiModule
  ],
  declarations: [
    ReceivingComponent
  ],
  exports: [
    ReceivingComponent
  ]
})
export class ReceivingModule { }
