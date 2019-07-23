import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationFormComponent } from './location-form/location-form.component';
import { LocationViewComponent } from './location-view/location-view.component';
import { LocationSelectorComponent } from './location-selector/location-selector.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { LocationApiModule } from '@bionic/apis/shipment/location-api';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ButtonModule,
    LocationApiModule,
    ReactiveFormsModule,
    FormButtonsModule,

    RouterModule.forChild([
      {
        path: '',
        component: LocationViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Locations',
          claimType: 'canViewLocations'
        }
      },
      {
        path: 'add',
        component: LocationFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Location',
          claimType: 'canAddLocations'
        }
      },
      {
        path: ':locationId/update',
        component: LocationFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Location',
          claimType: 'canAddLocations'
        }
      }
    ])
  ],
  declarations: [LocationFormComponent, LocationViewComponent],
  exports: [LocationFormComponent, LocationViewComponent]
})
export class LocationModule {}
