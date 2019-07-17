import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DriversSelectorComponent } from './drivers-selector/drivers-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { DriversApiModule } from '@bionic/apis/shipment/drivers-api';

@NgModule({
  declarations: [DriversSelectorComponent],
  exports: [DriversSelectorComponent],
  imports: [CommonModule, DropDownListModule, DriversApiModule]
})
export class DriverSelectorModule {}
