import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UnitOfMeasurmentsApiModule } from '@bionic/apis/inventory/unit-of-measurments-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { UnitOfMeasurmentFormComponent } from './unit-of-measurment-form/unit-of-measurment-form.component';
import { UnitOfMeasurmentViewComponent } from './unit-of-measurment-view/unit-of-measurment-view.component';
import { NotificationModule } from '@bionic/components/notification';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { SwitchModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  imports: [
    CommonModule,
    UnitOfMeasurmentsApiModule,
    DataGridModule,
    SwitchModule,
    ReactiveFormsModule,
    FormButtonsModule,
    NotificationModule,
    RouterModule.forChild([
      {
        path: '',
        component: UnitOfMeasurmentViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Unit of Measurments',
          claimType: 'canViewUnitOfMeasurments'
        }
      },
      {
        path: 'add',
        component: UnitOfMeasurmentFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Unit of Measurment',
          claimType: 'canAddUnitOfMeasurments'
        }
      },
      {
        path: ':uomId/update',
        component: UnitOfMeasurmentFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Unit of Measurment',
          claimType: 'canEditUnitOfMeasurments'
        }
      }
    ])
  ],
  declarations: [UnitOfMeasurmentFormComponent, UnitOfMeasurmentViewComponent]
})
export class UnitOfMeasurmentsModule {}
