import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOptionsComponent } from './form-options/form-options.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [CommonModule, ButtonModule],
  declarations: [FormOptionsComponent],
  exports: [FormOptionsComponent]
})
export class FormButtonsModule {}
