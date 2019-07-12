import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrintHeaderComponent } from './print-header/print-header.component';

@NgModule({
  declarations: [PrintHeaderComponent],
  exports: [PrintHeaderComponent],
  imports: [CommonModule]
})
export class PrintHeadersModule {}
