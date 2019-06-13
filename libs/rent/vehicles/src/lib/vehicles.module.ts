import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleFormComponent } from './vehicle-form/vehicle-form.component';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { DataGridModule } from '@bionic/components/data-grid';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
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
        component: VehicleViewComponent,
        data: { breadCrum: 'Update', title: 'Update Vehicle' }
      }
    ])
  ],
  declarations: [VehicleFormComponent, VehicleViewComponent],
  exports: [VehicleFormComponent, VehicleViewComponent]
})
export class VehiclesModule {}
