import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SystemLookupApiService } from './system-lookup-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SystemLookupApiService]
})
export class SystemLookupApiModule {}
