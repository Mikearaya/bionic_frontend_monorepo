import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleRentFormComponent } from './vehicle-rent-form/vehicle-rent-form.component';
import { VehicleRentViewComponent } from './vehicle-rent-view/vehicle-rent-view.component';
import { VehicleRentContractComponent } from './vehicle-rent-contract/vehicle-rent-contract.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { VehiclesApiModule } from '@bionic/apis/rent/vehicles-api';
import { ReactiveFormsModule } from '@angular/forms';
import { RentsApiModule } from '@bionic/apis/rent/rents-api';
import { VehicleSelectorComponent } from '@bionic/rent/vehicles';
import { AutoCompleteModule } from '@syncfusion/ej2-angular-dropdowns';
import { CustomerSelectorComponent } from '@bionic/rent/customers';
import { CustomerApiModule } from '@bionic/apis/rent/customer-api';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { TabModule, TabAllModule } from '@syncfusion/ej2-angular-navigations';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    VehiclesApiModule,
    TabModule,
    DatePickerModule,
    CustomerApiModule,
    FormButtonsModule,
    RentsApiModule,
    TabAllModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleRentViewComponent,
        data: { breadCrum: 'view', title: 'Vehicle Rents' }
      },
      {
        path: 'add',
        component: VehicleRentFormComponent,
        data: { breadCrum: 'add', title: 'Create New Rent' }
      },
      {
        path: ':rentId/update',
        component: VehicleRentFormComponent,
        data: { breadCrum: 'add', title: 'Update  Rent' }
      },
      {
        path: ':rentId/contract',
        component: VehicleRentContractComponent,
        data: { breadCrum: 'add', title: 'Rent Contract' }
      }
    ])
  ],
  declarations: [
    VehicleRentFormComponent,
    VehicleRentViewComponent,

    VehicleRentContractComponent,
    VehicleSelectorComponent,
    CustomerSelectorComponent
  ],
  exports: [
    VehicleRentFormComponent,
    VehicleRentViewComponent,
    VehicleRentContractComponent
  ]
})
export class VehicleRentModule {}
