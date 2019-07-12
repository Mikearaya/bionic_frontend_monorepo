import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PartnersPaymentViewComponent } from './partners-payment-view/partners-payment-view.component';
import { PartnersPaymentFormComponent } from './partners-payment-form/partners-payment-form.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { PartnersPaymentApiModule } from '@bionic/apis/rent/partners-payment-api';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ReactiveFormsModule } from '@angular/forms';
import { VehicleOwnersApiModule } from '@bionic/apis/rent/vehicle-owners-api';
import {
  FormButtonsModule,
  PrintButtonsModule
} from '@bionic/components/form-buttons';
import { PartnerPaymentRecieptComponent } from './partner-payment-reciept/partner-payment-reciept.component';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { PrintHeadersModule } from '@bionic/components/page-informations';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    DropDownListModule,
    DatePickerModule,
    FormButtonsModule,
    PrintHeadersModule,
    PrintButtonsModule,
    ButtonModule,
    ReactiveFormsModule,
    VehicleOwnersApiModule,
    PartnersPaymentApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: PartnersPaymentViewComponent,
        data: {
          breadCrum: 'view',
          claim: 'canViewPartnerPayments',
          title: 'Partner Payments'
        }
      },
      {
        path: 'add',
        component: PartnersPaymentFormComponent,
        data: {
          breadCrum: 'Add',
          claim: 'canAddPartnerPayments',
          title: 'New Partner Payment'
        }
      },
      {
        path: ':paymentId/update',
        component: PartnerPaymentRecieptComponent,
        data: {
          breadCrum: 'Reciept',
          claim: 'canUpdatePartnerPayments',
          title: 'Partner Payment Reciept'
        }
      }
    ])
  ],
  declarations: [
    PartnersPaymentViewComponent,
    PartnersPaymentFormComponent,
    PartnerPaymentRecieptComponent
  ],
  exports: [PartnersPaymentViewComponent, PartnersPaymentFormComponent]
})
export class PartnersPaymentModule {}
