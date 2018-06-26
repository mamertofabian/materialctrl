import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { AppUiModule } from '../appUi/appUi.module';

import { PromptComponent } from './prompt.component';

@NgModule({
  imports: [
      SharedModule,
      AppUiModule
  ],
  declarations: [PromptComponent]
})
export class PromptModule { }
