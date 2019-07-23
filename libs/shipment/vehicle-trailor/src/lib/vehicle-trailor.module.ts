import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleTrailorFormComponent } from './vehicle-trailor-form/vehicle-trailor-form.component';
import { VehicleTrailorViewComponent } from './vehicle-trailor-view/vehicle-trailor-view.component';
import { VehicleTrailorApiModule } from '@bionic/apis/shipment/vehicle-trailor-api';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGridModule } from '@bionic/components/data-grid';
import { SystemLookupSelectorModule } from '@bionic/components/system-lookup';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  imports: [
    CommonModule,
    VehicleTrailorApiModule,
    ReactiveFormsModule,
    DropDownListModule,
    FormButtonsModule,
    SystemLookupSelectorModule,
    DataGridModule,

    RouterModule.forChild([
      {
        path: '',
        component: VehicleTrailorViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Trailors',
          claimType: 'canViewTrailors'
        }
      },
      {
        path: 'add',
        component: VehicleTrailorFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Trailor',
          claimType: 'canAddTrailors'
        }
      },
      {
        path: ':trailorId/update',
        component: VehicleTrailorFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Trailor',
          claimType: 'canEditTrailors'
        }
      }
    ])
  ],
  declarations: [VehicleTrailorFormComponent, VehicleTrailorViewComponent],
  exports: [VehicleTrailorFormComponent, VehicleTrailorViewComponent]
})
export class VehicleTrailorModule {}
