import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerPaymentFormComponent } from './customer-payment-form/customer-payment-form.component';
import { CustomerPaymentViewComponent } from './customer-payment-view/customer-payment-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { CustomersPaymentApiModule } from '@bionic/apis/rent/customers-payment-api';
import { ReactiveFormsModule } from '@angular/forms';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { CustomerApiModule } from '@bionic/apis/rent/customer-api';
import {
  FormButtonsModule,
  PrintButtonsModule
} from '@bionic/components/form-buttons';
import { CustomerPaymentRecieptComponent } from './customer-payment-reciept/customer-payment-reciept.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PrintHeadersModule } from '@bionic/components/page-informations';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    DropDownListModule,
    PrintHeadersModule,
    PrintButtonsModule,
    ReactiveFormsModule,

    DatePickerModule,
    CustomersPaymentApiModule,
    ButtonModule,
    FormButtonsModule,
    CustomerApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerPaymentViewComponent,
        data: {
          breadCrum: 'View',
          claim: 'canViewCustomerPayments',
          title: 'Customer Payments'
        }
      },
      {
        path: 'add',
        component: CustomerPaymentFormComponent,
        data: {
          breadCrum: 'add',
          claim: 'canAddCustomerPayments',
          title: 'New Customer Payment'
        }
      },
      {
        path: ':paymentId/update',
        component: CustomerPaymentRecieptComponent,
        data: {
          breadCrum: 'Reciept',
          claim: 'canViewCustomerPaymentReciept',
          title: 'Customer Payment Reciept'
        }
      }
    ])
  ],
  declarations: [
    CustomerPaymentFormComponent,
    CustomerPaymentViewComponent,
    CustomerPaymentRecieptComponent
  ],
  exports: [CustomerPaymentFormComponent, CustomerPaymentViewComponent]
})
export class CustomerPaymentModule {}
