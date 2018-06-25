import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule,
    MatSidenavModule, MatListModule, MatExpansionModule, MatTableModule, 
    MatDialogModule, MatInputModule} from '@angular/material';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
      SharedModule, MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule, MatDialogModule, FormsModule, ReactiveFormsModule,
      MatInputModule
    ],
  exports: [
      MatButtonModule, MatToolbarModule, MatIconModule,
      MatCardModule, MatSidenavModule, MatListModule, MatExpansionModule,
      MatTableModule, MatDialogModule, FormsModule, ReactiveFormsModule,
      MatInputModule
    ],
  declarations: []
})
export class AppUiModule { }
