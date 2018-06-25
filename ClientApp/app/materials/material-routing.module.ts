import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MaterialListComponent } from './material-list/material-list.component';

const routes: Routes = [
    {
        path: 'materials',
        component: MaterialListComponent
    }
]

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
  declarations: []
})
export class MaterialRoutingModule { }
