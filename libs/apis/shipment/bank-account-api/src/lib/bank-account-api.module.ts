import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BankAccountApiService } from './bank-account-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [BankAccountApiService]
})
export class BankAccountApiModule {}
