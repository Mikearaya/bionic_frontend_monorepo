import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SystemRoleApiService } from './system-role-api.service';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [SystemRoleApiService]
})
export class SystemRolesApiModule {}
