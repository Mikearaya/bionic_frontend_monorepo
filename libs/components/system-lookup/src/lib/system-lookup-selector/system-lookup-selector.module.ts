import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemLookupSelectorComponent } from './system-lookup-selector/system-lookup-selector.component';
import { SystemLookupApiModule } from '@bionic/apis/common/system-lookup-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [SystemLookupSelectorComponent],
  imports: [CommonModule, DropDownListModule, SystemLookupApiModule],
  exports: [SystemLookupSelectorComponent]
})
export class SystemLookupSelectorModule {}
