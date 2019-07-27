import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FreightOrderViewComponent } from './freight-order-view/freight-order-view.component';
import { FreightOrderFormComponent } from './freight-order-form/freight-order-form.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { VehiclesSelectorModule } from '@bionic/rent/vehicles';
import { DriverSelectorModule } from '@bionic/shipment/drivers';
import { VehicleTrailorSelectorModule } from '@bionic/shipment/vehicle-trailor';
import { SystemLookupSelectorModule } from '@bionic/components/system-lookup';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { OperationSelectorModule } from '@bionic/shipment/operations';
import { FreightOrderApiModule } from '@bionic/apis/shipment/freight-order-api';
import { ReactiveFormsModule } from '@angular/forms';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DataGridModule,
    VehiclesSelectorModule,
    FormButtonsModule,
    VehicleTrailorSelectorModule,
    DriverSelectorModule,
    OperationSelectorModule,
    DateTimePickerModule,
    SystemLookupSelectorModule,
    FreightOrderApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: FreightOrderViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Freight Orders',
          claimType: 'canViewFreightOrders'
        }
      },
      {
        path: 'add',
        component: FreightOrderFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Freight Order',
          claimType: 'canAddFreightOrders'
        }
      },
      {
        path: ':freightOrderId/update',
        component: FreightOrderFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Freight Order',
          claimType: 'canEditFreightOrders'
        }
      }
    ])
  ],
  declarations: [FreightOrderViewComponent, FreightOrderFormComponent],
  exports: [FreightOrderViewComponent, FreightOrderFormComponent],
  providers: []
})
export class FreightOrderModule {}
