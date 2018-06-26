import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataService } from './dataService';

@NgModule({
  imports: [
    HttpModule
  ],
  declarations: [],
  providers: [
    DataService
  ]
})
export class CoreModule { }
