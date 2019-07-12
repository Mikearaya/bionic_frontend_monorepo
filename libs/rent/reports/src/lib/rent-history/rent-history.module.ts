import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentHistoryRoutingModule } from './rent-history-routing.module';
import { RentHistoryApiModule } from '@bionic/apis/rent/reports-api';
import { RentHistoryComponent } from './rent-history/rent-history.component';
import { DataGridModule } from '@bionic/components/data-grid';

@NgModule({
  declarations: [RentHistoryComponent],
  imports: [
    CommonModule,
    DataGridModule,
    RentHistoryRoutingModule,
    RentHistoryApiModule
  ],
  exports: [RentHistoryComponent]
})
export class RentHistoryModule {}
