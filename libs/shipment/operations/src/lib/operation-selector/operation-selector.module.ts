import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OperationSelectorComponent } from './operation-selector/operation-selector.component';
import {
  OperationsApiModule,
  OperationsApiService
} from '@bionic/apis/shipment/operations-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [OperationSelectorComponent],
  imports: [CommonModule, OperationsApiModule, DropDownListModule],
  exports: [OperationSelectorComponent],
  providers: [OperationsApiService]
})
export class OperationSelectorModule {}
