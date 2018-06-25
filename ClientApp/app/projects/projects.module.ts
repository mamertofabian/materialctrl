import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { AppUiModule } from '../appUi/appUi.module';

@NgModule({
  imports: [
    SharedModule,
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
