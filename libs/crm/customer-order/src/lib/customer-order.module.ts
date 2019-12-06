import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomerOrderApiModule } from '@bionic/apis/crm/customer-order-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { CustomerOrderFormComponent } from './customer-order-form/customer-order-form.component';
import { CustomerOrderViewComponent } from './customer-order-view/customer-order-view.component';
import { CustomerSelectorModule } from '@bionic/crm/customer';
import { ItemSelectorModule } from '@bionic/inventory/item';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    CustomerOrderApiModule,
    NotificationModule,
    FormButtonsModule,
    ButtonModule,
    DropDownListModule,
    NumericTextBoxModule,
    CustomerSelectorModule,
    DatePickerModule,
    ItemSelectorModule,
    DataGridModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CustomerOrderViewComponent,
        data: {
          title: 'Customer Orders',
          breadCrum: 'View',
          claimType: 'canViewCustomerOrders'
        }
      },
      {
        path: 'add',
        component: CustomerOrderFormComponent,
        data: {
          title: 'New customer order',
          breadCrum: 'Add',
          claimType: 'canAddCustomerOrders'
        }
      },
      {
        path: ':customerOrderId/update',
        component: CustomerOrderFormComponent,
        data: {
          title: 'Update customer order',
          breadCrum: 'Update',
          claimType: 'canEditCustomerOrders'
        }
      }
    ])
  ],
  declarations: [CustomerOrderFormComponent, CustomerOrderViewComponent]
})
export class CustomerOrderModule {}
