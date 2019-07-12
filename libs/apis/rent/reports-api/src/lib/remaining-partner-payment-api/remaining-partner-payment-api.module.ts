import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemainingPartnerPaymentApiService } from './remaining-partner-payment-api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RemainingPartnerPaymentApiService]
})
export class RemainingPartnerPaymentApiModule {}
