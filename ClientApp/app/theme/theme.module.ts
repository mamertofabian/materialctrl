import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatListModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
      CommonModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule
    ],
  exports: [
      CommonModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule
    ],
  declarations: []
})
export class ThemeModule { }
