import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShipmentViewComponent } from './shipment-view/shipment-view.component';
import { ShipmentFormComponent } from './shipment-form/shipment-form.component';
import { ShipmentDetailViewComponent } from './shipment-detail-view/shipment-detail-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ShipmentApiModule } from '@bionic/apis/inventory/shipment-api';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ShipmentApiModule,
    NotificationModule,
    FormButtonsModule,
    GridModule,
    DatePickerModule,
    ReactiveFormsModule,
    DropDownListModule,
    RouterModule.forChild([
      {
        path: '',
        component: ShipmentViewComponent,
        data: {
          title: 'Shipments',
          breadCrum: 'View',
          claimType: 'canViewShipments'
        }
      },
      {
        path: 'add',
        component: ShipmentFormComponent,
        data: {
          title: 'New Shipment',
          breadCrum: 'Add',
          claimType: 'canAddShipments'
        }
      },
      {
        path: ':shipmentId/update',
        component: ShipmentFormComponent,
        data: {
          title: 'Update Shipment',
          breadCrum: 'Update',
          claimType: 'canEditShipments'
        }
      },
      {
        path: ':shipmentId',
        component: ShipmentDetailViewComponent,
        data: {
          title: 'Shipment Detail',
          breadCrum: 'Detail',
          claimType: 'canViewShipmentDetail'
        }
      }
    ])
  ],
  declarations: [
    ShipmentDetailViewComponent,
    ShipmentFormComponent,
    ShipmentViewComponent
  ]
})
export class ShipmentModule {}
