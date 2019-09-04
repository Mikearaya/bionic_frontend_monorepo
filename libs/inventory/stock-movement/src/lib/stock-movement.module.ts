import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StockMovementViewComponent } from './stock-movement-view/stock-movement-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { StockMovementApiModule } from '@bionic/apis/inventory/stock-movement-api';
import { StockMovementFormComponent } from './stock-movement-form/stock-movement-form.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ItemSelectorModule } from '@bionic/inventory/item';
import { StorageLocationSelectorModule } from '@bionic/inventory/storage-locations';
import { StockBatchSelectorModule } from '@bionic/inventory/stock-batch';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
@NgModule({
  imports: [
    CommonModule,
    ItemSelectorModule,
    DropDownListModule,
    ReactiveFormsModule,
    StorageLocationSelectorModule,
    DataGridModule,
    NumericTextBoxModule,
    StockBatchSelectorModule,
    NotificationModule,
    FormButtonsModule,
    StockMovementApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: StockMovementViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Stock Movements',
          claimType: 'canViewStockMovements'
        }
      },
      {
        path: 'add',
        component: StockMovementFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Movements',
          claimType: 'canAddStockMovements'
        }
      },
      {
        path: ':movementId/update',
        component: StockMovementFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Movements',
          claimType: 'canEditStockMovements'
        }
      }
    ])
  ],
  declarations: [StockMovementViewComponent, StockMovementFormComponent]
})
export class StockMovementModule {}
