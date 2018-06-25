import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppUiModule } from '../appUi/appUi.module';

import { NavbarComponent } from './navbar.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppUiModule,
    AppRoutingModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
