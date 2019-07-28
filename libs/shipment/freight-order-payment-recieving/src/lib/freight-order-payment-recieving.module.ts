import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { FreightOrderPaymentRecievingApiModule } from '@bionic/apis/shipment/freight-order-payment-recieving-api';
import { FreightOrderPaymentRecievingFormComponent } from './freight-order-payment-recieving-form/freight-order-payment-recieving-form.component';
import { FreightOrderPaymentRecievingViewComponent } from './freight-order-payment-recieving-view/freight-order-payment-recieving-view.component';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { ReactiveFormsModule } from '@angular/forms';
import { BankAccountSelectorModule } from '@bionic/shipment/bank-account';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    FormButtonsModule,
    ReactiveFormsModule,
    BankAccountSelectorModule,

    FreightOrderPaymentRecievingApiModule,
    DateTimePickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: FreightOrderPaymentRecievingViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Payment Recievings',
          claimType: 'canViewPaymentRecievings'
        }
      },
      {
        path: 'add',
        component: FreightOrderPaymentRecievingFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Payment Recievings',
          claimType: 'canAddPaymentRecievings'
        }
      },
      {
        path: ':paymentRecievingId/update',
        component: FreightOrderPaymentRecievingFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Payment Recievings',
          claimType: 'canEditPaymentRecievings'
        }
      }
    ])
  ],
  declarations: [
    FreightOrderPaymentRecievingFormComponent,
    FreightOrderPaymentRecievingViewComponent
  ],
  exports: [
    FreightOrderPaymentRecievingFormComponent,
    FreightOrderPaymentRecievingViewComponent
  ]
})
export class FreightOrderPaymentRecievingModule {}
