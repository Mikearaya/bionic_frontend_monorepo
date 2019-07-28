import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FreightOrderPaymentRequestApiService } from './freight-order-payment-request-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [FreightOrderPaymentRequestApiService]
})
export class FreightOrderPaymentRequestApiModule {}
