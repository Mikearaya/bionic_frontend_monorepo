import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersApiService } from './customers-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [CustomersApiService]
})
export class CustomerApiModule {}
