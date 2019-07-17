import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { DriversApiModule } from '@bionic/apis/shipment/drivers-api';
import { DriversViewComponent } from './drivers-view/drivers-view.component';
import { DriversFormComponent } from './drivers-form/drivers-form.component';
import { FormButtonsModule } from '@bionic/components/form-buttons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataGridModule,
    DriversApiModule,
    FormButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DriversViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Drivers',
          claimType: 'canViewDrivers'
        }
      },
      {
        path: 'add',
        component: DriversFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Driver',
          claimType: 'canAddDrivers'
        }
      },
      {
        path: ':driverId/update',
        component: DriversFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Driver',
          claimType: 'canEditDrivers'
        }
      }
    ])
  ],
  declarations: [DriversFormComponent, DriversViewComponent],
  exports: [DriversFormComponent, DriversViewComponent]
})
export class DriversModule {}
