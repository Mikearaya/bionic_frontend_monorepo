import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OperationFormComponent } from './operation-form/operation-form.component';
import { OperationViewComponent } from './operation-view/operation-view.component';
import { OperationsApiModule } from '@bionic/apis/shipment/operations-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { LocationSelectorModule } from '@bionic/shipment/location';
import { VehiclesSelectorModule } from '@bionic/rent/vehicles';
import { SystemLookupSelectorModule } from '@bionic/components/system-lookup';
import { CustomersSelectorModule } from '@bionic/rent/customers';
import { DriverSelectorModule } from '@bionic/shipment/drivers';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OperationsApiModule,
    DriverSelectorModule,
    DataGridModule,
    LocationSelectorModule,
    FormButtonsModule,
    VehiclesSelectorModule,
    SystemLookupSelectorModule,
    CustomersSelectorModule,
    DateTimePickerModule,

    RouterModule.forChild([
      {
        path: '',
        component: OperationViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Operations',
          claimType: 'canViewOperations'
        }
      },
      {
        path: 'add',
        component: OperationFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Operation',
          claimType: 'canAddOperations'
        }
      },
      {
        path: ':operationId/update',
        component: OperationFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Operation',
          claimType: 'canEditOperations'
        }
      }
    ])
  ],
  declarations: [OperationFormComponent, OperationViewComponent],
  exports: [OperationFormComponent, OperationViewComponent]
})
export class OperationsModule {}
