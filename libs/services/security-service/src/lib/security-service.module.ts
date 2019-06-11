import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityService } from './security-service.service';

@NgModule({
  imports: [CommonModule],
  providers: [SecurityService]
})
export class SecurityServiceModule {}
