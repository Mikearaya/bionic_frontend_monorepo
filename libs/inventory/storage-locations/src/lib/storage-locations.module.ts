import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StorageLocationsApiModule } from '@bionic/apis/inventory/storage-locations-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { NotificationModule } from '@bionic/components/notification';
import { StorageLocationFormComponent } from './storage-location-form/storage-location-form.component';
import { StorageLocationViewComponent } from './storage-location-view/storage-location-view.component';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';

@NgModule({
  imports: [
    CommonModule,
    StorageLocationsApiModule,
    DataGridModule,
    NotificationModule,
    FormButtonsModule,
    SwitchModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: '',
        component: StorageLocationViewComponent,
        data: {
          title: 'Storage locations',
          breadCrum: 'View',
          claimType: 'canViewStorageLocations'
        }
      },
      {
        path: 'add',
        component: StorageLocationFormComponent,
        data: {
          title: 'Create storage location',
          breadCrum: 'Add',
          claimType: 'canAddStorageLocations'
        }
      },
      {
        path: ':storageId/update',
        component: StorageLocationFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Storage Location',
          claimType: 'canEditStorageLocations'
        }
      }
    ])
  ],
  declarations: [StorageLocationFormComponent, StorageLocationViewComponent]
})
export class StorageLocationsModule {}
