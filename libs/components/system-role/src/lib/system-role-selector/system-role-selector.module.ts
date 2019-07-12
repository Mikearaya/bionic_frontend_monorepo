import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemRoleSelectorComponent } from './system-role-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [SystemRoleSelectorComponent],
  imports: [CommonModule, DropDownListModule],
  exports: [SystemRoleSelectorComponent]
})
export class SystemRoleSelectorModule {}
