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
import { ActivationGuard } from '@bionic/apis/common/access-control-api';
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
          title: 'Customer Payments',
          claimType: 'canViewCustomerPayments'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'add',
        component: CustomerPaymentFormComponent,
        data: {
          breadCrum: 'add',
          claimType: 'canAddCustomerPayments',
          title: 'New Customer Payment'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: ':paymentId/update',
        component: CustomerPaymentRecieptComponent,
        data: {
          breadCrum: 'Reciept',
          claimType: 'canPrintCustomerPaymentReciept',
          title: 'Customer Payment Reciept'
        },
        canActivate: [ActivationGuard]
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
