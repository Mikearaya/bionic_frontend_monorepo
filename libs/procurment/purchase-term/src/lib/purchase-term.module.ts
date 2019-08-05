import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PurchaseTermFormComponent } from './purchase-term-form/purchase-term-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { VendorSelectorModule } from '@bionic/procurment/vendor';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NotificationModule } from '@bionic/components/notification';
import { PurchaseTermApiModule } from '@bionic/apis/procurment/purchase-term-api';
import { ItemApiModule } from '@bionic/apis/inventory/item-api';
import { VendorApiModule } from '@bionic/apis/procurment/vendor-api';
import { PurchaseTermViewComponent } from './purchase-term-view/purchase-term-view.component';

@NgModule({
  declarations: [PurchaseTermFormComponent, PurchaseTermViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PurchaseTermApiModule,
    DataGridModule,
    FormButtonsModule,
    NumericTextBoxModule,
    NotificationModule,
    VendorSelectorModule,
    ItemApiModule,
    VendorApiModule,
    DropDownListModule,

    RouterModule.forChild([
      {
        path: '',
        component: PurchaseTermViewComponent,
        data: { title: '', breadCrum: 'Purchase terms' }
      },
      {
        path: 'add',
        component: PurchaseTermFormComponent,
        data: { title: 'New Purchase Term', breadCrum: 'Update' }
      },
      {
        path: ':purchaseTermId/update',
        component: PurchaseTermFormComponent,
        data: { title: 'Update Purchase Term', breadCrum: 'Update' }
      },
      {
        path: 'item/:itemId',
        component: PurchaseTermFormComponent,
        data: { title: 'Item Purchase Term', breadCrum: 'New' }
      },
      {
        path: 'vendor/:vendorId',
        component: PurchaseTermFormComponent,
        data: { title: 'Vendor Purchase Term', breadCrum: 'New' }
      }
    ])
  ]
})
export class PurchaseTermModule {}
