import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FreightOrderPaymentRequestApiModule } from '@bionic/apis/shipment/freight-order-payment-request-api';
import { ReactiveFormsModule } from '@angular/forms';
import { FreightOrderPaymentRequestFormComponent } from './freight-order-payment-request-form/freight-order-payment-request-form.component';
import { FreightOrderPaymentRequestViewComponent } from './freight-order-payment-request-view/freight-order-payment-request-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { FreightOrderSelectorModule } from '@bionic/shipment/freight-order';

@NgModule({
  imports: [
    CommonModule,
    FreightOrderPaymentRequestApiModule,
    ReactiveFormsModule,
    DataGridModule,
    FormButtonsModule,
    FreightOrderSelectorModule,
    DateTimePickerModule,
    RouterModule.forChild([
      {
        path: '',
        component: FreightOrderPaymentRequestViewComponent,
        data: {
          breadCrum: 'View',
          title: 'Payment Requests',
          claimType: 'canViewPaymentRequests'
        }
      },
      {
        path: 'add',
        component: FreightOrderPaymentRequestFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Payment Requests',
          claimType: 'canAddPaymentRequests'
        }
      },
      {
        path: ':paymentRequestId/update',
        component: FreightOrderPaymentRequestFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Payment Requests',
          claimType: 'canEditPaymentRequests'
        }
      }
    ])
  ],
  declarations: [
    FreightOrderPaymentRequestFormComponent,
    FreightOrderPaymentRequestViewComponent
  ],
  exports: [
    FreightOrderPaymentRequestFormComponent,
    FreightOrderPaymentRequestViewComponent
  ]
})
export class FreightOrderPaymentRequestModule {}
