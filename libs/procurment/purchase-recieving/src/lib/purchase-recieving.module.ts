import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseOrderApiModule } from '@bionic/apis/procurment/purchase-order-api';
import { NotificationModule } from '@bionic/components/notification';
import { VendorApiModule } from '@bionic/apis/procurment/vendor-api';
import { PurchaseRecievingViewComponent } from './purchase-recieving-view/purchase-recieving-view.component';
import { PurchaseRecievingFormComponent } from './purchase-recieving-form/purchase-recieving-form.component';
import { PurchaseRecievingApiModule } from '@bionic/apis/procurment/purchase-recieving-api';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { PurchaseOrderSelectorModule } from '@bionic/procurment/purchase-order';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    FormButtonsModule,
    NotificationModule,
    PurchaseOrderApiModule,
    PurchaseRecievingApiModule,
    PurchaseOrderSelectorModule,
    VendorApiModule,
    ReactiveFormsModule,
    NumericTextBoxModule,

    RouterModule.forChild([
      {
        path: '',
        component: PurchaseRecievingViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Purchase Recievings',
          claimType: 'canViewPurchaseRecievings'
        }
      },
      {
        path: ':purchaseOrderId/update',
        component: PurchaseRecievingFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Purchase Recievigs',
          claimType: 'canEditPurchaseRecievings'
        }
      }
    ])
  ],
  declarations: [PurchaseRecievingViewComponent, PurchaseRecievingFormComponent]
})
export class PurchaseRecievingModule {}
