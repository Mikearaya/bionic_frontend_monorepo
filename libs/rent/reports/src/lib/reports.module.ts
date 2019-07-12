import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RemainingPartnerPaymentModule } from './remaining-partner-payment/remaining-partner-payment.module';
import { RemainingCustomerPaymentModule } from './remaining-customer-payment/remaining-customer-payment.module';
import { RemainingPartnerPaymentViewComponent } from './remaining-partner-payment/remaining-partner-payment-view/remaining-partner-payment-view.component';
import { RemainingCustomerPaymentViewComponent } from './remaining-customer-payment/remaining-customer-payment-view/remaining-customer-payment-view.component';
import { RentHistoryModule } from './rent-history/rent-history.module';
import { RentHistoryComponent } from './rent-history/rent-history/rent-history.component';
import { CustomerPaymentHistoryModule } from './customer-payment-history/customer-payment-history.module';
import { CustomerPaymentHistoryComponent } from './customer-payment-history/customer-payment-history.component';
import { PartnerPaymentsHistoryModule } from './partner-payments-history/partner-payments-history.module';
import { PartnerPaymentsHistoryComponent } from './partner-payments-history/partner-payments-history.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'partner-payments',
        component: RemainingPartnerPaymentViewComponent,
        data: {
          breadCrum: 'Remaining Partner Payments',
          title: 'Remaining Partner Payments',
          claim: 'canViewRemainingPartnerPayments'
        }
      },
      {
        path: 'customer-payments',
        component: RemainingCustomerPaymentViewComponent,
        data: {
          breadCrum: 'Remaining Customer Payments',
          title: 'Remaining Customer Payments',
          claim: 'canViewRemainingCustomerPayments'
        }
      },
      {
        path: 'rent-history',
        component: RentHistoryComponent,
        data: {
          breadCrum: 'rent history',
          claim: 'canViewRentHistory',
          title: 'Rent History'
        }
      },
      {
        path: 'customer-payments-history',
        component: CustomerPaymentHistoryComponent,
        data: {
          breadCrum: 'Customers payment history',
          claim: 'canViewRentHistory',
          title: 'Rent History'
        }
      },
      {
        path: 'partner-payments-history',
        component: PartnerPaymentsHistoryComponent,
        data: {
          breadCrum: 'Partners Payment history',
          claim: 'canViewRentHistory',
          title: 'Rent History'
        }
      }
    ]),

    RemainingPartnerPaymentModule,

    RemainingCustomerPaymentModule,

    RentHistoryModule,

    CustomerPaymentHistoryModule,
    PartnerPaymentsHistoryModule
  ],
  declarations: [],
  exports: []
})
export class ReportsModule {}
