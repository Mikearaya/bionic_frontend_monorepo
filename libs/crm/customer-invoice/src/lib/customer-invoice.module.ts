import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InvoiceFormComponent } from './invoice-form/invoice-form.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { CustomerInvoiceApiModule } from '@bionic/apis/crm/customer-invoice-api';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    NotificationModule,
    CustomerInvoiceApiModule,
    FormButtonsModule,

    RouterModule.forChild([
      {
        path: '',
        component: InvoiceViewComponent,
        data: { breadCrum: 'View', title: 'Customer Invoices' }
      },
      {
        path: 'add',
        component: InvoiceFormComponent,
        data: { breadCrum: 'add', title: 'New Invoice' }
      },
      {
        path: ':invoiceId/update',
        component: InvoiceFormComponent,
        data: { breadCrum: 'Update', title: 'Update Invoice' }
      }
    ])
  ],
  declarations: [InvoiceFormComponent, InvoiceViewComponent]
})
export class CustomerInvoiceModule {}
