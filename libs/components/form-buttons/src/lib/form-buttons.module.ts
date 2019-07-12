import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormOptionsComponent } from './form-options/form-options.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PrintButtonsModule } from './print-buttons/print-buttons.module';

@NgModule({
  imports: [CommonModule, ButtonModule, PrintButtonsModule],
  declarations: [FormOptionsComponent],
  exports: [FormOptionsComponent]
})
export class FormButtonsModule {}
