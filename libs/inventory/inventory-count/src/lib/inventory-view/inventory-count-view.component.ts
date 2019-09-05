import {
  CommandModel,
  EditSettingsModel,
  FilterSettingsModel,
  PageSettingsModel,
  SortSettingsModel,
  ToolbarItems,
  IRow,
  Column,
  DataStateChangeEventArgs
} from '@syncfusion/ej2-grids';

import { Component, OnInit, ViewChild } from '@angular/core';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { inventoryColumnBluePrint } from './inventory-count-view-columns-blue-print.model';
import { Router } from '@angular/router';
import { ClickEventArgs } from '@syncfusion/ej2-navigations';
import { closest } from '@syncfusion/ej2-base';
import { NotificationComponent } from '@bionic/components/notification';
import {
  InventoryViewModel,
  InventoryCountApiService
} from '@bionic/apis/inventory/inventory-count-api';
import { Subject } from 'rxjs';
import { QueryString } from '@bionic/components/data-grid';

@Component({
  selector: 'bionic-inventory-count-view',
  templateUrl: './inventory-count-view.component.html',
  styleUrls: ['./inventory-count-view.component.css']
})
export class InventoryCountViewComponent implements OnInit {
  @ViewChild('grid')
  public grid: GridComponent;

  @ViewChild('notification')
  public notification: NotificationComponent;

  public data: Subject<DataStateChangeEventArgs>;
  public pageSettings: PageSettingsModel;
  public sortSetting: SortSettingsModel;
  public filterSetting: FilterSettingsModel;
  public editSettings: EditSettingsModel;
  public toolbar: ToolbarItems[];
  public printMode: 'CurrentPage';

  public columnBluePrint = inventoryColumnBluePrint;
  public customAttributes: { class: string };
  public filterOptions: { type: string };

  constructor(
    private inventoryApi: InventoryCountApiService,
    private route: Router
  ) {
    this.data = this.inventoryApi;
    this.inventoryApi.execute(new QueryString());

    this.customAttributes = { class: 'custom-grid-header' };
    this.filterOptions = { type: 'Menu' }; // put unique filter menue for each column based on the column type
    this.editSettings = {
      allowEditing: false,
      allowAdding: true,
      allowDeleting: false
    };
    this.pageSettings = { pageSize: 10 };
    this.toolbar = [
      'Print',
      'ExcelExport',
      'PdfExport',
      'Search',
      'ColumnChooser'
    ];

    this.sortSetting = { columns: [{ direction: 'Ascending', field: 'Item' }] };
  }

  clicked(data: any) {
    const item = <InventoryViewModel>data;

    if (item.NewQuantity < item.Quantity) {
    } else if (item.NewQuantity > item.Quantity) {
    }
  }
  ngOnInit(): void {
    this.inventoryApi.execute(new QueryString());
  }

  updateAllInventory(data: any) {
    const rows = this.grid.getColumns();
    // console.log(rows);
    //  const rowObj: IRow<Column> = this.grid.getRowObjectFromUID(closest(<Element>args.target, '.e-row').getAttribute('data-uid'));
  }

  updateInventory(data: any) {}

  public quantityValue = (field: string, data: Object, column: Object) => {
    return data[field] + ' ' + data['Uom'];
  };

  toolbarClick(args: ClickEventArgs): void {
    switch (args.item.id) {
      case 'inventory_pdfexport':
        this.grid.pdfExport();
        break;
      case 'inventory_excelexport':
        this.grid.excelExport();
        break;
      case 'inventory_print':
        this.grid.print();
        break;
    }
  }
}
