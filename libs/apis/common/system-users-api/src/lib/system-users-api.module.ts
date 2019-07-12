import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SystemUserApiService } from './system-user-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SystemUserApiService]
})
export class SystemUsersApiModule {}
