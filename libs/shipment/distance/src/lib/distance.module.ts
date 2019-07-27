import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DistanceViewComponent } from './distance-view/distance-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { DistanceApiModule } from '@bionic/apis/shipment/distance-api';
import { DistanceFormComponent } from './distance-form/distance-form.component';
import { LocationSelectorModule } from '@bionic/shipment/location';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    DistanceApiModule,
    ReactiveFormsModule,
    LocationSelectorModule,
    ButtonModule,
    FormButtonsModule,
    RouterModule.forChild([
      {
        path: '',
        component: DistanceViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Distances',
          claimType: 'canViewDistances'
        }
      },
      {
        path: 'add',
        component: DistanceFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Distances',
          claimType: 'canAddDistances'
        }
      },
      {
        path: ':distanceId/update',
        component: DistanceFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Distances',
          claimType: 'canEditDistances'
        }
      }
    ])
  ],
  declarations: [DistanceViewComponent, DistanceFormComponent],
  exports: [DistanceViewComponent, DistanceFormComponent]
})
export class DistanceModule {}
