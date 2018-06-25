import { NgModule } from '@angular/core';
import { AppUiModule } from '../appUi/appUi.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { NotificationsModule } from '../notifications/notifications.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  imports: [
      SharedModule,
      AppUiModule,
      AppRoutingModule,
      NotificationsModule
  ],
  declarations: [
    NavbarComponent
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavbarModule { }
