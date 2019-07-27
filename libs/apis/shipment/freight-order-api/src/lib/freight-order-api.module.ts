import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FreightOrderApiService } from './freight-order-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [FreightOrderApiService]
})
export class FreightOrderApiModule {}
