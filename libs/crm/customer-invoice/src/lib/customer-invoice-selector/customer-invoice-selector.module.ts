import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerInvoiceSelectorComponent } from './customer-invoice-selector.component';
import { CustomerInvoiceApiModule } from '@bionic/apis/crm/customer-invoice-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CustomerInvoiceSelectorComponent],
  exports: [CustomerInvoiceSelectorComponent],
  imports: [CommonModule, CustomerInvoiceApiModule, DropDownListModule]
})
export class CustomerInvoiceSelectorModule {}
