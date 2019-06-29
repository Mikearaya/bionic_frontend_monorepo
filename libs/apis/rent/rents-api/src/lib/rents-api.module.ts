import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RentsApiService } from './rents-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [RentsApiService]
})
export class RentsApiModule {}
