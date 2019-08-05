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

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    FormButtonsModule,
    NotificationModule,
    ReactiveFormsModule,
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
