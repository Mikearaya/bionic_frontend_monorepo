import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleRentFormComponent } from './vehicle-rent-form/vehicle-rent-form.component';
import { VehicleRentViewComponent } from './vehicle-rent-view/vehicle-rent-view.component';
import { VehicleRentContractComponent } from './vehicle-rent-contract/vehicle-rent-contract.component';
import {DataGridModule} from '@bionic/components/data-grid';
import {VehiclesApiModule} from '@bionic/apis/rent/vehicles-api'
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    VehiclesApiModule,

    RouterModule.forChild([
      {path: '', component: VehicleRentViewComponent, data: {breadCrum: 'view', title: 'Vehicle Rents'}},
      {path: 'add', component: VehicleRentFormComponent, data: {breadCrum: 'add', title: 'Create New Rent'}},
      {path: ':rentId/update', component: VehicleRentFormComponent, data: {breadCrum: 'add', title: 'Update  Rent'}},
      {path: ':rentId/contract', component: VehicleRentContractComponent, data: {breadCrum: 'add', title: 'Rent Contract'}}
    ])
  ],
  declarations: [VehicleRentFormComponent, VehicleRentViewComponent, VehicleRentContractComponent],
  exports: [VehicleRentFormComponent, VehicleRentViewComponent, VehicleRentContractComponent]
})
export class VehicleRentModule {}
