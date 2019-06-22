import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { CustomerViewComponent } from './customer-view/customer-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { CustomerApiModule } from '@bionic/apis/rent/customer-api';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    CustomerApiModule,
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
    ])
  ],
  declarations: [CustomerFormComponent, CustomerViewComponent],
  exports: [CustomerFormComponent, CustomerViewComponent],
  providers: []
})
export class CustomersModule {}
