import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { AccessControlApiModule } from '@bionic/apis/common/access-control-api';

@NgModule({
  declarations: [LogInComponent],
  imports: [
    CommonModule,
    FormButtonsModule,
    ReactiveFormsModule,
    AccessControlApiModule,

    RouterModule.forChild([{ path: '', component: LogInComponent }])
  ]
})
export class AuthenticationModule {}
