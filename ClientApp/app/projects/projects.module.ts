import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    AppUiModule
  ],
  declarations: [
    ProjectsComponent
  ],
  exports: [
    ProjectsComponent
  ]
})
export class ProjectsModule { }
