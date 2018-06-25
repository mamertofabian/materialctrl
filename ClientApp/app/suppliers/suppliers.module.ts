import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersRoutingModule } from './suppliers-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

import { SuppliersComponent } from './suppliers.component';

@NgModule({
  imports: [
    CommonModule,
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
