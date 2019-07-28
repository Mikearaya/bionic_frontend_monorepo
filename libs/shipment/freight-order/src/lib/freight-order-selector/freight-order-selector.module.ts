import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FreightOrderSelectorComponent } from './freight-order-selector/freight-order-selector.component';
import { FreightOrderApiModule } from '@bionic/apis/shipment/freight-order-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [FreightOrderSelectorComponent],
  imports: [CommonModule, FreightOrderApiModule, DropDownListModule],
  exports: [FreightOrderSelectorComponent]
})
export class FreightOrderSelectorModule {}
