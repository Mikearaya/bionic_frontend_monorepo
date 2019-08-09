import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { PurchaseOrderApiModule } from '@bionic/apis/procurment/purchase-order-api';
import { PurchaseOrderViewComponent } from './purchase-order-view/purchase-order-view.component';
import { PurchaseOrderFormComponent } from './purchase-order-form/purchase-order-form.component';
import { NotificationModule } from '@bionic/components/notification';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { VendorSelectorModule } from '@bionic/procurment/vendor';
import { ItemSelectorModule } from '@bionic/inventory/item';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    FormButtonsModule,
    PurchaseOrderApiModule,
    NotificationModule,
    VendorSelectorModule,
    ItemSelectorModule,
    ButtonModule,
    ReactiveFormsModule,
    NumericTextBoxModule,
    DatePickerModule,
    DropDownListModule,

    RouterModule.forChild([
      {
        path: '',
        component: PurchaseOrderViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Purchase Orders',
          claimType: 'canViewPurchaseOrders'
        }
      },
      {
        path: 'add',
        component: PurchaseOrderFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Purchase Orders',
          claimType: 'canAddPurchaseOrders'
        }
      },
      {
        path: ':purchaseOrderId/update',
        component: PurchaseOrderFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Purchase Orders',
          claimType: 'canEditPurchaseOrders'
        }
      }
    ])
  ],
  declarations: [PurchaseOrderViewComponent, PurchaseOrderFormComponent]
})
export class PurchaseOrderModule {}
