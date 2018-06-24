import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatListModule, MatExpansionModule, MatTableModule } from '@angular/material';

@NgModule({
  imports: [
      CommonModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule
    ],
  exports: [
      CommonModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule
    ],
  declarations: []
})
export class ThemeModule { }
