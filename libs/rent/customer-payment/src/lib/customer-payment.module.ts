import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerPaymentFormComponent } from './customer-payment-form/customer-payment-form.component';
import { CustomerPaymentViewComponent } from './customer-payment-view/customer-payment-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { CustomersPaymentApiModule } from '@bionic/apis/rent/customers-payment-api';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    CustomersPaymentApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerPaymentViewComponent,
        data: { breadCrum: 'View', claim: 'canViewCustomerPayments' }
      },
      {
        path: 'add',
        component: CustomerPaymentFormComponent,
        data: { breadCrum: 'add', claim: 'canAddCustomerPayments' }
      },
      {
        path: ':paymentId/update',
        component: CustomerPaymentFormComponent,
        data: { breadCrum: 'update', claim: 'canUpdateCustomerPayments' }
      }
    ])
  ],
  declarations: [CustomerPaymentFormComponent, CustomerPaymentViewComponent],
  exports: [CustomerPaymentFormComponent, CustomerPaymentViewComponent]
})
export class CustomerPaymentModule {}
