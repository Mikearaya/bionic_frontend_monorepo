import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PartnersPaymentViewComponent } from './partners-payment-view/partners-payment-view.component';
import { PartnersPaymentFormComponent } from './partners-payment-form/partners-payment-form.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { PartnersPaymentApiModule } from '@bionic/apis/rent/partners-payment-api';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    PartnersPaymentApiModule,
    RouterModule.forChild([
      {
        path: '',
        component: PartnersPaymentViewComponent,
        data: { breadCrum: 'view', claim: 'canViewPartnerPayments' }
      },
      {
        path: 'add',
        component: PartnersPaymentFormComponent,
        data: { breadCrum: 'add', claim: 'canAddPartnerPayments' }
      },
      {
        path: ':paymentId/update',
        component: PartnersPaymentFormComponent,
        data: { breadCrum: 'update', claim: 'canUpdatePartnerPayments' }
      }
    ])
  ],
  declarations: [PartnersPaymentViewComponent, PartnersPaymentFormComponent],
  exports: [PartnersPaymentViewComponent, PartnersPaymentFormComponent]
})
export class PartnersPaymentModule {}
