import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerSelectorComponent } from './customer-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { CustomerApiService } from '@bionic/apis/crm/customer-api';

@NgModule({
  declarations: [CustomerSelectorComponent],
  imports: [CommonModule, DropDownListModule],
  exports: [CustomerSelectorComponent],
  providers: [CustomerApiService]
})
export class CustomerSelectorModule {}
