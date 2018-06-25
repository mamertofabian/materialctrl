import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SuppliersComponent } from './suppliers.component';

const routes: Routes = [
  { path: 'suppliers', component: SuppliersComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)    
  ],
  declarations: []
})
export class SuppliersRoutingModule { }
