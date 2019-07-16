import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleRentFormComponent } from './vehicle-rent-form/vehicle-rent-form.component';
import { VehicleRentViewComponent } from './vehicle-rent-view/vehicle-rent-view.component';
import { VehicleRentContractComponent } from './vehicle-rent-contract/vehicle-rent-contract.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { ReactiveFormsModule } from '@angular/forms';
import { RentsApiModule } from '@bionic/apis/rent/rents-api';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { CustomersSelectorModule } from '@bionic/rent/customers';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { VehiclesSelectorModule } from '@bionic/rent/vehicles';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import {
  ActivationGuard,
  AccessControlApiModule
} from '@bionic/apis/common/access-control-api';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    VehiclesSelectorModule,
    TabModule,
    ButtonModule,
    CustomersSelectorModule,
    DatePickerModule,
    FormButtonsModule,
    AccessControlApiModule,

    RentsApiModule,

    TabAllModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleRentViewComponent,
        data: { breadCrum: 'view', title: 'Rents', claimType: 'canViewRents' },
        canActivate: [ActivationGuard]
      },
      {
        path: 'add',
        component: VehicleRentFormComponent,
        data: { breadCrum: 'add', title: 'New Rent', claimType: 'canAddRents' },
        canActivate: [ActivationGuard]
      },
      {
        path: ':rentId/update',
        component: VehicleRentFormComponent,
        data: {
          breadCrum: 'add',
          title: 'Update  Rent',
          claimType: 'canEditRents'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: ':rentId/contract',
        component: VehicleRentContractComponent,
        data: {
          breadCrum: 'add',
          title: 'Rent Contract',
          claimType: 'canPrintRentContract'
        }
      }
    ])
  ],
  declarations: [
    VehicleRentFormComponent,
    VehicleRentViewComponent,
    VehicleRentContractComponent
  ],
  exports: [
    VehicleRentFormComponent,
    VehicleRentViewComponent,
    VehicleRentContractComponent
  ]
})
export class VehicleRentModule {}
