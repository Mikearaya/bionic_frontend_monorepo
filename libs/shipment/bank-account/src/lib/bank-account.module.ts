import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankAccountFormComponent } from './bank-account-form/bank-account-form.component';
import { BankAccountApiModule } from '@bionic/apis/shipment/bank-account-api';
import { BankAccountViewComponent } from './bank-account-view/bank-account-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';

@NgModule({
  imports: [
    CommonModule,
    BankAccountApiModule,
    DataGridModule,
    ReactiveFormsModule,
    FormButtonsModule,

    RouterModule.forChild([
      {
        path: '',
        component: BankAccountViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Bank Accounts',
          claimType: 'canViewBankAccounts'
        }
      },
      {
        path: 'add',
        component: BankAccountFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Bank Account',
          claimType: 'canAddBankAccounts'
        }
      },
      {
        path: ':bankId/update',
        component: BankAccountFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Bank Account',
          claimType: 'canEditBankAccounts'
        }
      }
    ])
  ],
  declarations: [BankAccountFormComponent, BankAccountViewComponent],
  exports: [BankAccountFormComponent, BankAccountViewComponent]
})
export class BankAccountModule {}
