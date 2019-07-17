import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { LocationSelectorComponent } from './location-selector.component';
import { LocationApiModule } from '@bionic/apis/shipment/location-api';

@NgModule({
  declarations: [LocationSelectorComponent],
  imports: [CommonModule, DropDownListModule, LocationApiModule]
})
export class LocationSelectorModule {}
