import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridModule } from '@bionic/components/data-grid';
import { RemainingCustomerPaymentRoutingModule } from './remaining-customer-payment-routing.module';
import { RemainingCustomerPaymentViewComponent } from './remaining-customer-payment-view/remaining-customer-payment-view.component';
import { RemainingCustomerPaymentApiModule } from '@bionic/apis/rent/reports-api';

@NgModule({
  declarations: [RemainingCustomerPaymentViewComponent],
  imports: [
    CommonModule,
    RemainingCustomerPaymentRoutingModule,
    RemainingCustomerPaymentApiModule,
    DataGridModule
  ],
  exports: [RemainingCustomerPaymentViewComponent]
})
export class RemainingCustomerPaymentModule {}
