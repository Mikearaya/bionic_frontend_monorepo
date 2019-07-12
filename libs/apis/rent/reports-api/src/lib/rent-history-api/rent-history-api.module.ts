import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentHistoryApiService } from './rent-history-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [RentHistoryApiService]
})
export class RentHistoryApiModule {}
