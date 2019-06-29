import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomersPaymentApiService } from './customers-payment-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CustomersPaymentApiService]
})
export class CustomersPaymentApiModule {}
