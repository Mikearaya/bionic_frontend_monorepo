import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LocationApiService } from './location-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [LocationApiService]
})
export class LocationApiModule {}
