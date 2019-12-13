import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerInvoicePaymentFormComponent } from './customer-invoice-payment-form/customer-invoice-payment-form.component';
import { CustomerInvoicePaymentViewComponent } from './customer-invoice-payment-view/customer-invoice-payment-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { CustomerInvoicePaymentApiModule } from '@bionic/apis/crm/customer-invoice-payment-api';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerInvoiceSelectorModule } from '@bionic/crm/customer-invoice';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    NotificationModule,
    FormButtonsModule,
    CustomerInvoiceSelectorModule,
    CustomerInvoicePaymentApiModule,
    DatePickerModule,
    NumericTextBoxModule,

    RouterModule.forChild([
      {
        path: '',
        component: CustomerInvoicePaymentViewComponent,
        data: { breadCrum: 'view', title: 'Invoice Payments' }
      },
      {
        path: 'add',
        component: CustomerInvoicePaymentFormComponent,
        data: { breadCrum: 'add', title: 'New Payment' }
      },
      {
        path: ':paymentId/update',
        component: CustomerInvoicePaymentFormComponent,
        data: { breadCrum: 'add', title: 'Update Payment' }
      }
    ])
  ],
  declarations: [
    CustomerInvoicePaymentFormComponent,
    CustomerInvoicePaymentViewComponent
  ]
})
export class CustomerInvoicePaymentModule {}
