import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewComponent } from './data-view/data-view.component';
import { GroupedDataViewComponent } from './grouped-data-view/grouped-data-view.component';
import {
  GridModule,
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
  ContextMenuService
} from '@syncfusion/ej2-angular-grids';
import { SecurityService } from '@bionic/services/security-service';

@NgModule({
  imports: [CommonModule, GridModule],
  declarations: [DataViewComponent, GroupedDataViewComponent],
  exports: [DataViewComponent, GroupedDataViewComponent],
  providers: [
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
    SecurityService
  ]
})
export class DataGridModule {}
