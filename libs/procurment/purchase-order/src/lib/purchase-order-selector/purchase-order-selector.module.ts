import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseOrderSelectorComponent } from './purchase-order-selector.component';
import { PurchaseOrderApiModule } from '@bionic/apis/procurment/purchase-order-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { VendorSelectorModule } from '@bionic/procurment/vendor';
@NgModule({
  declarations: [PurchaseOrderSelectorComponent],
  imports: [
    CommonModule,
    PurchaseOrderApiModule,
    DropDownListModule,
    VendorSelectorModule
  ],
  exports: [PurchaseOrderSelectorComponent]
})
export class PurchaseOrderSelectorModule {}
