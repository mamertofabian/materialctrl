import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MaterialRoutingModule } from './material-routing.module';
import { AppUiModule } from '../appUi/appUi.module';
import { AgGridModule } from 'ag-grid-angular';

import { MaterialListComponent } from './material-list/material-list.component';
import { MaterialDetailComponent } from '../materials/material-detail/material-detail.component';


@NgModule({
    imports: [
     SharedModule,
     AppUiModule,
     MaterialRoutingModule,
     AgGridModule.withComponents([]),
    ],
    declarations: [
        MaterialListComponent,
        MaterialDetailComponent
    ],
    entryComponents: [
        MaterialDetailComponent
    ],
    exports: [
        MaterialListComponent
    ]
})
export class MaterialsModule { }
