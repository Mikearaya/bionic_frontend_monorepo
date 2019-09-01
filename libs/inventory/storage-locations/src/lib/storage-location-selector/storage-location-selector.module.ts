import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageLocationSelectorComponent } from './storage-location-selector.component';
import { StorageLocationsApiModule } from '@bionic/apis/inventory/storage-locations-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [StorageLocationSelectorComponent],
  imports: [CommonModule, StorageLocationsApiModule, DropDownListModule],
  exports: [StorageLocationSelectorComponent]
})
export class StorageLocationSelectorModule {}
