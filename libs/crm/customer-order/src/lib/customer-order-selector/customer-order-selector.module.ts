import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerOrderSelectorComponent } from './customer-order-selector.component';
import { CustomerOrderApiModule } from '@bionic/apis/crm/customer-order-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
@NgModule({
  declarations: [CustomerOrderSelectorComponent],
  imports: [CommonModule, CustomerOrderApiModule, DropDownListModule],
  exports: [CustomerOrderSelectorComponent]
})
export class CustomerOrderSelectorModule {}
