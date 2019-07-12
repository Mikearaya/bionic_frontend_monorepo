import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { CustomerApiModule } from '@bionic/apis/rent/customer-api';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';

import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { CustomersSelectorModule } from './customers-selector/customers-selector.module';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CustomerApiModule,
    FormButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerViewComponent,
        data: { breadCrum: 'View', title: 'Customers' }
      },
      {
        path: 'add',
        component: CustomerFormComponent,
        data: { breadCrum: 'add', title: 'Add New Customer' }
      },
      {
        path: ':customerId/update',
        component: CustomerFormComponent,
        data: { breadCrum: 'Update', title: 'Update Customer' }
      }
    ]),
    CustomersSelectorModule
  ],
  declarations: [CustomerFormComponent, CustomerViewComponent],
  exports: [CustomerFormComponent, CustomerViewComponent],
  providers: []
})
export class CustomersModule {}
