import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitOfMeasurmentSelectorComponent } from './unit-of-measurment-selector.component';
import { UnitOfMeasurmentsApiModule } from '@bionic/apis/inventory/unit-of-measurments-api';
import { NotificationModule } from '@bionic/components/notification';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [UnitOfMeasurmentSelectorComponent],
  imports: [
    CommonModule,
    UnitOfMeasurmentsApiModule,
    DropDownListModule,
    NotificationModule
  ],
  exports: [UnitOfMeasurmentSelectorComponent]
})
export class UnitOfMeasurmentSelectorModule {}
