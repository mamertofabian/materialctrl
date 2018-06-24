import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialsComponent } from './materials/materials.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { ReceivingComponent } from './receiving/receiving.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
    },
    {
        path: 'projects',
        component: ProjectsComponent
    },
    {
        path: 'materials',
        component: MaterialsComponent
    },
    {
        path: 'suppliers',
        component: SuppliersComponent
    },
    {
        path: 'receiving',
        component: ReceivingComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
