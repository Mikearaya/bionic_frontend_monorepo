import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehicleTrailorApiService } from './vehicle-trailor-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [VehicleTrailorApiService]
})
export class VehicleTrailorApiModule {}
