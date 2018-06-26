import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ReceivingComponent } from './receiving.component';

const routes: Routes = [
  { path: 'receiving', component: ReceivingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ReceivingRoutingModule { }
