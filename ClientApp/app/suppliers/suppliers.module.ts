import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { SuppliersComponent } from './suppliers.component';

@NgModule({
  imports: [
    SharedModule,
    SuppliersRoutingModule,
    AppUiModule
  ],
  declarations: [
    SuppliersComponent
  ],
  exports: [
    SuppliersComponent
  ]
})
export class SuppliersModule { }
