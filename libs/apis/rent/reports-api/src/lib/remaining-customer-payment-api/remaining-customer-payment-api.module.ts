import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemainingCustomerPaymentApiService } from './remaining-customer-payment-api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RemainingCustomerPaymentApiService]
})
export class RemainingCustomerPaymentApiModule {}
