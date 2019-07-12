import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemainingPartnerPaymentRoutingModule } from './remaining-partner-payment-routing.module';
import { DataGridModule } from '@bionic/components/data-grid';
import { RemainingPartnerPaymentViewComponent } from './remaining-partner-payment-view/remaining-partner-payment-view.component';
import { RemainingPartnerPaymentApiModule } from '@bionic/apis/rent/reports-api';
@NgModule({
  declarations: [RemainingPartnerPaymentViewComponent],
  imports: [
    CommonModule,
    RemainingPartnerPaymentRoutingModule,
    DataGridModule,
    RemainingPartnerPaymentApiModule
  ],
  exports: [RemainingPartnerPaymentViewComponent]
})
export class RemainingPartnerPaymentModule {}
