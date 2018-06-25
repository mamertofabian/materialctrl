import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppUiModule } from '../appUi/appUi.module';

import { NotificationsComponent } from './notifications.component';

@NgModule({
    imports: [
    SharedModule,
    AppUiModule
    ],
    declarations: [NotificationsComponent],
    exports: [NotificationsComponent]
})
export class NotificationsModule { }
