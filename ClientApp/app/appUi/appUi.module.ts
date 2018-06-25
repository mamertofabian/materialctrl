import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatListModule, MatExpansionModule, MatTableModule, MatDialogModule } from '@angular/material';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
      SharedModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule, MatDialogModule
    ],
  exports: [
      MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule, MatDialogModule
    ],
  declarations: []
})
export class AppUiModule { }
