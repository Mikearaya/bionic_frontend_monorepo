import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { VehiclesApiService } from './vehicles-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [VehiclesApiService]
})
export class VehiclesApiModule {}
