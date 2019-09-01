import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemViewComponent } from './item-view/item-view.component';
import { ItemPurchaseTermViewComponent } from './item-purchase-term-view/item-purchase-term-view.component';
import { ItemRoutingListViewComponent } from './item-routing-list-view/item-routing-list-view.component';
import { ItemBomListViewComponent } from './item-bom-list-view/item-bom-list-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemApiModule } from '@bionic/apis/inventory/item-api';
import { PurchaseTermApiModule } from '@bionic/apis/procurment/purchase-term-api';
import { ItemGroupSelectorModule } from '@bionic/inventory/item-groups';
import { UnitOfMeasurmentSelectorModule } from '@bionic/inventory/unit-of-measurments';
import { StorageLocationSelectorModule } from '@bionic/inventory/storage-locations';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    NumericTextBoxModule,
    SwitchModule,
    TabModule,
    FormButtonsModule,
    ItemGroupSelectorModule,
    StorageLocationSelectorModule,
    UnitOfMeasurmentSelectorModule,
    NotificationModule,
    ReactiveFormsModule,
    PurchaseTermApiModule,
    ItemApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemViewComponent,
        data: { breadCrum: 'View', title: 'Items', claimType: 'canViewItems' }
      },
      {
        path: 'add',
        component: ItemFormComponent,
        data: { breadCrum: 'Add', title: 'New Item', claimType: 'canAddItems' }
      },
      {
        path: ':itemId/update',
        component: ItemFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Item',
          claimType: 'canEditItems'
        }
      }
    ])
  ],
  declarations: [
    ItemFormComponent,
    ItemViewComponent,
    ItemPurchaseTermViewComponent,
    ItemRoutingListViewComponent,
    ItemBomListViewComponent
  ]
})
export class ItemModule {}
