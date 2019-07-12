import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CustomerPaymentsReportApiService } from './customer-payments-report-api.service';
@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [CustomerPaymentsReportApiService]
})
export class CustomerPaymentsReportApiModule {}
