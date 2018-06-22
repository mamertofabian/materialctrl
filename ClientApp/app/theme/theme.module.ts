import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
      CommonModule,
      MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule
    ],
  exports: [
      CommonModule,
      MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule, MatListModule
    ],
  declarations: []
})
export class ThemeModule { }
