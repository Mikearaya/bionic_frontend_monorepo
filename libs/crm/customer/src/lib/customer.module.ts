import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerInvoiceApiModule } from '@bionic/apis/crm/customer-invoice-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormButtonsModule } from '@bionic/components/form-buttons';

@NgModule({
  imports: [
    CommonModule,
    CustomerInvoiceApiModule,
    ButtonModule,
    DataGridModule,
    NotificationModule,
    NumericTextBoxModule,
    DropDownListModule,
    ReactiveFormsModule,
    FormButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerViewComponent,
        data: {
          title: 'Customers',
          customerSelfContained: true,
          breadCrum: 'View'
        }
      },
      {
        path: 'add',
        component: CustomerFormComponent,
        data: {
          title: 'Add New Customer',
          customerSelfContained: true,
          breadCrum: 'Add'
        }
      },
      {
        path: ':customerId/update',
        component: CustomerFormComponent,
        data: {
          title: 'Update Customer',
          customerSelfContained: true,
          breadCrum: 'Update'
        }
      },
      { path: 'customer', loadChildren: '@bionic/crm/customer#CustomerModule' },
      { path: 'customer', loadChildren: '@bionic/crm/customer#CustomerModule' }
    ])
  ],
  declarations: [CustomerFormComponent, CustomerViewComponent]
})
export class CustomerModule {}
