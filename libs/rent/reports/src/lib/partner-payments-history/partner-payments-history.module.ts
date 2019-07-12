import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerPaymentsHistoryRoutingModule } from './partner-payments-history-routing.module';
import { PartnerPaymentsHistoryComponent } from './partner-payments-history.component';
import { PartnerPaymentsReportApiModule } from '@bionic/apis/rent/reports-api';
import { GridModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [PartnerPaymentsHistoryComponent],
  imports: [
    CommonModule,
    GridModule,
    PartnerPaymentsHistoryRoutingModule,
    PartnerPaymentsReportApiModule
  ],
  exports: [PartnerPaymentsHistoryComponent]
})
export class PartnerPaymentsHistoryModule {}
