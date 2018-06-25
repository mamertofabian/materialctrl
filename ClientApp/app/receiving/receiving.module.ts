import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReceivingRoutingModule } from './receiving-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { ReceivingComponent } from './receiving.component';

@NgModule({
  imports: [
    SharedModule,
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
