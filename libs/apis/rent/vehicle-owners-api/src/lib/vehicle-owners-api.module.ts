import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleOwnersApiService } from './vehicle-owners-api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [VehicleOwnersApiService]
})
export class VehicleOwnersApiModule {}
