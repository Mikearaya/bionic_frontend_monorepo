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
import { ActivationGuard } from '@bionic/apis/common/access-control-api';

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
          claimType: 'canViewRemainingPartnerPaymentsReport'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'customer-payments',
        component: RemainingCustomerPaymentViewComponent,
        data: {
          breadCrum: 'Remaining Customer Payments',
          title: 'Remaining Customer Payments',
          claimType: 'canViewRemainingCustomerPaymentsReport'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'rent-history',
        component: RentHistoryComponent,
        data: {
          breadCrum: 'rent history',
          claimType: 'canViewRentHistoryReport',
          title: 'Rent History'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'customer-payments-history',
        component: CustomerPaymentHistoryComponent,
        data: {
          breadCrum: 'Customers payment history',
          claimType: 'canViewCustomerPaymentsReport',
          title: 'Rent History'
        },
        canActivate: [ActivationGuard]
      },
      {
        path: 'partner-payments-history',
        component: PartnerPaymentsHistoryComponent,
        data: {
          breadCrum: 'Partners Payment history',
          claimType: 'canViewPartnerPaymentsReport',
          title: 'Rent History'
        },
        canActivate: [ActivationGuard]
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
