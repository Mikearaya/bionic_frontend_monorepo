import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationApiService } from './authentication-api.service';
import { AuthorizationApiService } from './authorization-api.service';
import { HasClaimDirective } from './has-claim.directive';
@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthenticationApiService, AuthorizationApiService],
  declarations: [HasClaimDirective],
  exports: [HasClaimDirective]
})
export class AccessControlApiModule {}
