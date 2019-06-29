import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PartnersPaymentApiService } from './partners-payment-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [PartnersPaymentApiService]
})
export class PartnersPaymentApiModule {}
