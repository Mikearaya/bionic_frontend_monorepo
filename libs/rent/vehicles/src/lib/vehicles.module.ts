import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import {
  DropDownListModule,
  AutoCompleteModule
} from '@syncfusion/ej2-angular-dropdowns';
import { VehicleOwnersSelectorComponent } from '@bionic/rent/vehicle-owners';
import { VehiclesApiModule } from '@bionic/apis/rent/vehicles-api';
import { VehicleOwnersApiModule } from '@bionic/apis/rent/vehicle-owners-api';
import { VehicleSelectorComponent } from './vehicle-selector/vehicle-selector.component';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    DropDownListModule,
    VehiclesApiModule,
    VehicleOwnersApiModule,
    AutoCompleteModule,
    FormButtonsModule,

    RouterModule.forChild([
      {
        path: '',
        component: VehicleViewComponent,
        data: { breadCrum: 'view', title: 'Vehicles' }
      },
      {
        path: 'add',
        component: VehicleFormComponent,
        data: { breadCrum: 'add', title: 'Add New Vehicle' }
      },
      {
        path: ':vehicleId/update',
        component: VehicleFormComponent,
        data: { breadCrum: 'Update', title: 'Update Vehicle' }
      }
    ])
  ],
  declarations: [
    VehicleFormComponent,
    VehicleViewComponent,
    VehicleOwnersSelectorComponent,
    VehicleSelectorComponent
  ],
  exports: [VehicleFormComponent, VehicleViewComponent, VehicleSelectorComponent],
  providers: []
})
export class VehiclesModule {}
