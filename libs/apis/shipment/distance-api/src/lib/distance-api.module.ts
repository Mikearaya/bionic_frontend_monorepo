import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DistanceApiService } from './distance-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [DistanceApiService]
})
export class DistanceApiModule {}
