import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { PasswordChangeFormComponent } from './password-change-form/password-change-form.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { SystemUsersApiModule } from '@bionic/apis/common/system-users-api';
import { SystemRolesApiModule } from '@bionic/apis/common/system-roles-api';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

import { ReactiveFormsModule } from '@angular/forms';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { SystemRoleSelectorModule } from '@bionic/components/system-role';

@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    SystemUsersApiModule,
    ReactiveFormsModule,
    SystemRolesApiModule,
    NumericTextBoxModule,
    FormButtonsModule,
    DropDownListModule,
    SystemRoleSelectorModule
  ],
  declarations: [UserFormComponent, PasswordChangeFormComponent],
  exports: [UserFormComponent, PasswordChangeFormComponent]
})
export class SystemUsersModule {}
