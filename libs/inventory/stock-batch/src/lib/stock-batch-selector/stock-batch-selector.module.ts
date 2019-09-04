import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockBatchSelectorComponent } from './stock-batch-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { StockBatchApiService } from '@bionic/apis/inventory/stock-batch-api';

@NgModule({
  declarations: [StockBatchSelectorComponent],
  imports: [CommonModule, DropDownListModule],
  providers: [StockBatchApiService],
  exports: [StockBatchSelectorComponent]
})
export class StockBatchSelectorModule {}
