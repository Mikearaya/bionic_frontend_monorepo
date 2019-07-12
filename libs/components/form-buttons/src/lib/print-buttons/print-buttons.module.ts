import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultPrintButtonComponent } from './default-print-button/default-print-button.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  declarations: [DefaultPrintButtonComponent],
  imports: [CommonModule, ButtonModule],
  exports: [DefaultPrintButtonComponent]
})
export class PrintButtonsModule {}
