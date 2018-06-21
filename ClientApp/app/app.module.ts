import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { MaterialList } from './manage/materialList.component';
import { DataService } from './shared/dataService';

@NgModule({
    declarations: [
        AppComponent,
        MaterialList
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AgGridModule.withComponents([])
    ],
    providers: [
        DataService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
