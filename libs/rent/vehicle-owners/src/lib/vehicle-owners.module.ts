import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { VehicleOwnerFormComponent } from './vehicle-owner-form/vehicle-owner-form.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { VehicleOwnerViewComponent } from './vehicle-owner-view/vehicle-owner-view.component';
import {
  VehicleOwnersApiService,
  VehicleOwnersApiModule
} from '@bionic/apis/rent/vehicle-owners-api';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { PartnerSelectorModule } from './partner-selector/partner-selector.module';
import { ActivationGuard } from '@bionic/apis/common/access-control-api';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    DropDownListModule,
    ReactiveFormsModule,
    FormButtonsModule,
    VehicleOwnersApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: VehicleOwnerViewComponent,
        data: {
          breadCrum: 'view',
          title: 'Partners',
          claimType: 'canViewPartners'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'add',
        component: VehicleOwnerFormComponent,
        data: {
          breadCrum: 'add',
          title: 'New Partner',
          claimType: 'canAddPartners'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: ':ownerId/update',
        component: VehicleOwnerFormComponent,
        data: {
          breadCrum: 'update',
          title: 'Update Partner',
          claimType: 'canEditPartners'
        },
        canActivate: [ActivationGuard]
      }
    ]),
    PartnerSelectorModule
  ],
  declarations: [VehicleOwnerFormComponent, VehicleOwnerViewComponent],
  exports: [VehicleOwnerFormComponent, VehicleOwnerViewComponent],
  providers: []
})
export class VehicleOwnersModule {}
