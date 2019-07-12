import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentDashBoardApiService } from './rent-dashboard-api.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RentDashBoardApiService]
})
export class RentDashBoardApiModule {}
