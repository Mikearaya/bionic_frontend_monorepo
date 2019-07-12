import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemainingCustomerPaymentApiModule } from './remaining-customer-payment-api/remaining-customer-payment-api.module';
import { RemainingPartnerPaymentApiModule } from './remaining-partner-payment-api/remaining-partner-payment-api.module';
import { RentHistoryApiModule } from './rent-history-api/rent-history-api.module';

import { CustomerPaymentsReportApiModule } from './customer-payments-report-api/customer-payments-report-api.module';
import { PartnerPaymentsReportApiModule } from './partner-payments-report-api/partner-payments-report-api.module';

@NgModule({
  imports: [
    CommonModule,
    RemainingCustomerPaymentApiModule,
    RemainingPartnerPaymentApiModule,
    RentHistoryApiModule,
    CustomerPaymentsReportApiModule,
    PartnerPaymentsReportApiModule
  ]
})
export class ReportsApiModule {}
