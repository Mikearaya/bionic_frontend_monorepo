import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorSelectorComponent } from './vendor-selector.component';
import { VendorApiModule } from '@bionic/apis/procurment/vendor-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
  declarations: [VendorSelectorComponent],
  imports: [CommonModule, VendorApiModule, DropDownListModule],
  exports: [VendorSelectorComponent]
})
export class VendorSelectorModule {}
