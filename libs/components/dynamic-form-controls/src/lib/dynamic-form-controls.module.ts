import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormDataService } from './dynamic-form-data.service';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DynamicFormComponent, DynamicFormQuestionComponent],
  exports: [DynamicFormComponent, DynamicFormQuestionComponent],
  providers: [DynamicFormDataService]
})
export class DynamicFormControlsModule {}
