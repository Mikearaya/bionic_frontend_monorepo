import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FreightOrderPaymentRecievingApiService } from './freight-order-payment-recieving-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [FreightOrderPaymentRecievingApiService]
})
export class FreightOrderPaymentRecievingApiModule {}
