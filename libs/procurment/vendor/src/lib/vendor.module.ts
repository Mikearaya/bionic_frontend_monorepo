import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from '@bionic/components/notification';
import { VendorFormComponent } from './vendor-form/vendor-form.component';
import { VendorViewComponent } from './vendor-view/vendor-view.component';
import { VendorPurchaseTermViewComponent } from './vendor-purchase-term-view/vendor-purchase-term-view.component';
import { VendorApiModule } from '@bionic/apis/procurment/vendor-api';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NotificationModule,
    DataGridModule,
    FormButtonsModule,
    GridModule,
    TabModule,
    NumericTextBoxModule,
    VendorApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: VendorViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Vendors',
          claimType: 'canViewVendors'
        }
      },
      {
        path: 'add',
        component: VendorFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Vendor',
          claimType: 'canAddVendors'
        }
      },
      {
        path: ':vendorId/update',
        component: VendorFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Vendor',
          claimType: 'canEditVendors'
        }
      }
    ])
  ],
  declarations: [
    VendorFormComponent,
    VendorViewComponent,
    VendorPurchaseTermViewComponent
  ]
})
export class VendorModule {}
