import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WriteOffsApiModule } from '@bionic/apis/inventory/write-offs-api';
import { NotificationModule } from '@bionic/components/notification';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGridModule } from '@bionic/components/data-grid';
import { WriteOffViewComponent } from './write-off-view/write-off-view.component';
import { WriteOffFormComponent } from './write-off-form/write-off-form.component';
import { ItemSelectorModule } from '@bionic/inventory/item';
import { StockBatchApiModule } from '@bionic/apis/inventory/stock-batch-api';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataGridModule,
    ItemSelectorModule,
    NotificationModule,
    NumericTextBoxModule,
    StockBatchApiModule,
    DropDownListModule,
    WriteOffsApiModule,
    FormButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: WriteOffViewComponent,
        data: {
          breadcrum: 'View',
          title: 'Write Offs',
          claimType: 'canViewWriteOffs'
        }
      },
      {
        path: 'add',
        component: WriteOffFormComponent,
        data: {
          breadcrum: 'Add',
          title: 'New Write Offs',
          claimType: 'canAddWriteOffs'
        }
      },
      {
        path: ':writeoffId/update',
        component: WriteOffFormComponent,
        data: {
          breadcrum: 'Update',
          title: 'Update Write Off',
          claimType: 'canEditWriteOffs'
        }
      }
    ])
  ],
  declarations: [WriteOffFormComponent, WriteOffViewComponent]
})
export class WriteOffsModule {}
