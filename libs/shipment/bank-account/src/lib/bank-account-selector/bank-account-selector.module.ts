import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankAccountSelectorComponent } from './bank-account-selector/bank-account-selector.component';
import { BankAccountApiModule } from '@bionic/apis/shipment/bank-account-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [BankAccountSelectorComponent],
  imports: [CommonModule, BankAccountApiModule, DropDownListModule],
  exports: [BankAccountSelectorComponent]
})
export class BankAccountSelectorModule {}
