import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerPaymentHistoryRoutingModule } from './customer-payment-history-routing.module';
import { CustomerPaymentHistoryComponent } from './customer-payment-history.component';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { CustomerPaymentsReportApiModule } from '@bionic/apis/rent/reports-api';

@NgModule({
  declarations: [CustomerPaymentHistoryComponent],
  imports: [
    CommonModule,
    GridModule,
    CustomerPaymentHistoryRoutingModule,
    CustomerPaymentsReportApiModule
  ],
  exports: [CustomerPaymentHistoryComponent]
})
export class CustomerPaymentHistoryModule {}
