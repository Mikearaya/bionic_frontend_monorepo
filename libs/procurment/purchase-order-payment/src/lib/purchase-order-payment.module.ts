import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseOrderPaymentApiModule } from '@bionic/apis/procurment/purchase-order-payment-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderPaymentFormComponent } from './purchase-order-payment-form/purchase-order-payment-form.component';
import { PurchaseOrderPaymentViewComponent } from './purchase-order-payment-view/purchase-order-payment-view.component';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { PurchaseOrderSelectorModule } from '@bionic/procurment/purchase-order';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    PurchaseOrderPaymentFormComponent,
    PurchaseOrderPaymentViewComponent
  ],
  imports: [
    CommonModule,
    PurchaseOrderPaymentApiModule,
    FormButtonsModule,
    PurchaseOrderSelectorModule,
    DataGridModule,
    DateTimePickerModule,
    ReactiveFormsModule,
    NotificationModule,
    RouterModule.forChild([
      {
        path: '',
        component: PurchaseOrderPaymentViewComponent,
        data: {
          title: 'Purchase Order Payments',
          breadCrum: 'View',
          claimType: 'canViewPurchaseOrderPayments'
        }
      },
      {
        path: 'add',
        component: PurchaseOrderPaymentFormComponent,
        data: {
          title: 'New Purchase Order Payment',
          breadCrum: 'Add',
          claimType: 'canAddPurchaseOrderPayments'
        }
      },
      {
        path: ':paymentId/update',
        component: PurchaseOrderPaymentFormComponent,
        data: {
          title: 'Update Purchase Order Payment',
          breadCrum: 'Update',
          claimType: 'canEditPurchaseOrderPayments'
        }
      }
    ])
  ]
})
export class PurchaseOrderPaymentModule {}
