import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import {
  AggregateService,
  SortService,
  FilterService,
  GroupService,
  EditService,
  ExcelExportService,
  ColumnChooserService,
  ColumnMenuService,
  DetailRowService,
  SearchService,
  PdfExportService,
  ReorderService,
  CommandColumnService,
  ToolbarService,
  ResizeService,
  PageService,
  ContextMenuService,
  GridModule
} from '@syncfusion/ej2-angular-grids';
import { InventoryCountApiModule } from '@bionic/apis/inventory/inventory-count-api';
import { NotificationModule } from '@bionic/components/notification';
import { InventoryCountViewComponent } from './inventory-view/inventory-count-view.component';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DataGridModule } from '@bionic/components/data-grid';
@NgModule({
  imports: [
    CommonModule,
    InventoryCountApiModule,
    NumericTextBoxModule,
    GridModule,
    FormsModule,
    ButtonModule,

    NotificationModule,
    RouterModule.forChild([
      {
        path: '',
        component: InventoryCountViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Current Inventory',
          claimType: 'canViewCurrentInventory'
        }
      }
    ])
  ],
  declarations: [InventoryCountViewComponent],
  providers: []
})
export class InventoryCountModule {}
