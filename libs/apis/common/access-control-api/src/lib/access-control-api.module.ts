import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationApiService } from './authentication-api.service';
import { AuthorizationGuard } from './authorization.guard';
import { AuthorizationApiService } from './authorization-api.service';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [
    AuthenticationApiService,
    AuthorizationGuard,
    AuthorizationApiService
  ]
})
export class AccessControlApiModule {}
