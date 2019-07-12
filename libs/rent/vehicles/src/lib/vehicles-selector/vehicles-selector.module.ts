import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiclesApiModule } from '@bionic/apis/rent/vehicles-api';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [VehicleSelectorComponent],
  imports: [CommonModule, DropDownListModule, VehiclesApiModule],
  exports: [VehicleSelectorComponent]
})
export class VehiclesSelectorModule {}
