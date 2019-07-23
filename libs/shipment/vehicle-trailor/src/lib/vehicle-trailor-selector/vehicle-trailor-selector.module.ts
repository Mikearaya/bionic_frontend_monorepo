import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleTrailorSelectorComponent } from './vehicle-trailor-selector/vehicle-trailor-selector.component';
import { VehicleTrailorApiModule } from '@bionic/apis/shipment/vehicle-trailor-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [VehicleTrailorSelectorComponent],
  imports: [CommonModule, VehicleTrailorApiModule, DropDownListModule],
  exports: [VehicleTrailorSelectorComponent]
})
export class VehicleTrailorSelectorModule {}
