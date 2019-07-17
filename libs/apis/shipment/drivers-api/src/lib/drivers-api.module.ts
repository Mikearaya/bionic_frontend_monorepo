import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DriversApiService } from './drivers-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [DriversApiService]
})
export class DriversApiModule {}
