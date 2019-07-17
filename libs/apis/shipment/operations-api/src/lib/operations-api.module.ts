import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { OperationsApiService } from './operations-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [OperationsApiService]
})
export class OperationsApiModule {}
