import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSelectorComponent } from './customer-selector/customer-selector.component';
import { CustomerApiModule } from '@bionic/apis/rent/customer-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CustomerSelectorComponent],
  imports: [CommonModule, DropDownListModule, CustomerApiModule],
  exports: [CustomerSelectorComponent]
})
export class CustomersSelectorModule {}
