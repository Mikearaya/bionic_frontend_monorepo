import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StockBatchApiModule } from '@bionic/apis/inventory/stock-batch-api';
import { ItemSelectorModule } from '@bionic/inventory/item';
import { StorageLocationSelectorModule } from '@bionic/inventory/storage-locations';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { NotificationModule } from '@bionic/components/notification';
import { DataGridModule } from '@bionic/components/data-grid';
import { StockBatchViewComponent } from './stock-batch-view/stock-batch-view.component';
import { StockBatchFormComponent } from './stock-batch-form/stock-batch-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    StorageLocationSelectorModule,
    ItemSelectorModule,
    ReactiveFormsModule,
    FormButtonsModule,
    NotificationModule,
    DropDownListModule,
    NumericTextBoxModule,
    DatePickerModule,
    DataGridModule,
    StockBatchApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: StockBatchViewComponent,
        data: {
          title: 'Stock lots',
          breadCrum: 'View',
          claimType: 'canViewStockBatchs'
        }
      },
      {
        path: 'add',
        component: StockBatchFormComponent,
        data: {
          title: 'New Batch',
          breadCrum: 'Add',
          claimType: 'canAddStockBatchs'
        }
      },
      {
        path: ':stockBatchId/update',
        component: StockBatchFormComponent,
        data: {
          title: 'Update Stock Batch',
          breadCrum: 'Update',
          claimType: 'canEditStockBatchs'
        }
      }
    ])
  ],
  declarations: [StockBatchFormComponent, StockBatchViewComponent]
})
export class StockBatchModule {}
