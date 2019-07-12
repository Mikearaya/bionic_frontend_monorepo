import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartnerSelectorComponent } from './partner-selector/partner-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { VehicleOwnersApiModule } from '@bionic/apis/rent/vehicle-owners-api';

@NgModule({
  declarations: [PartnerSelectorComponent],
  imports: [CommonModule, DropDownListModule, VehicleOwnersApiModule],
  exports: [PartnerSelectorComponent]
})
export class PartnerSelectorModule {}
