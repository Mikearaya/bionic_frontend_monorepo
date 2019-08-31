import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ItemGroupsApiModule } from '@bionic/apis/inventory/item-groups-api';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemGroupFormComponent } from './item-group-form/item-group-form.component';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { NotificationModule } from '@bionic/components/notification';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DataGridModule } from '@bionic/components/data-grid';
import { ItemGroupViewComponent } from './item-group-view/item-group-view.component';
import { ItemGroupSelectorModule } from './item-group-selector/item-group-selector.module';
@NgModule({
  imports: [
    CommonModule,
    ItemGroupsApiModule,
    NotificationModule,
    DataGridModule,
    ItemGroupSelectorModule,
    FormButtonsModule,
    DropDownListModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemGroupViewComponent,
        data: {
          title: 'Item Groups',
          claimType: 'canViewItemGroups',
          breadCrum: 'view'
        }
      },
      {
        path: 'add',
        component: ItemGroupFormComponent,
        data: {
          title: 'New Item Group',
          claimType: 'canAddItemGroups',
          breadCrum: 'Add'
        }
      },
      {
        path: ':itemGroupId/update',
        component: ItemGroupFormComponent,
        data: {
          title: 'Update Item Group',
          claimType: 'canEditItemGroups',
          breadCrum: 'Update'
        }
      }
    ]),
    ItemGroupSelectorModule
  ],
  declarations: [ItemGroupFormComponent, ItemGroupViewComponent]
})
export class ItemGroupsModule {}
