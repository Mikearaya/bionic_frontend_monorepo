import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserViewComponent } from './user-view/user-view.component';
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
    SystemRoleSelectorModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserViewComponent,
        data: { title: 'Users', breadCrum: 'View' }
      },
      {
        path: 'add',
        component: UserFormComponent,
        data: { title: 'Create user', breadCrum: 'Add' }
      },
      {
        path: ':userId/update',
        component: UserFormComponent,
        data: { title: 'Update user', breadCrum: 'Update' }
      },
      {
        path: ':userId/password',
        component: PasswordChangeFormComponent,
        data: {
          title: 'Update user password',
          breadCrum: 'update password'
        }
      }
    ])
  ],
  declarations: [
    UserViewComponent,
    UserFormComponent,
    PasswordChangeFormComponent
  ]
})
export class SystemUsersModule {}
