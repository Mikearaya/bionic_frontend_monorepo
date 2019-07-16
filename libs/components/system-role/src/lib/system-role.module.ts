import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemRoleFormComponent } from './system-role-form/system-role-form.component';
import { SystemRoleViewComponent } from './system-role-view/system-role-view.component';
import { SystemRolesApiModule } from '@bionic/apis/common/system-roles-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';
import { ReactiveFormsModule } from '@angular/forms';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { ActivationGuard } from '@bionic/apis/common/access-control-api';

@NgModule({
  imports: [
    CommonModule,
    SystemRolesApiModule,
    TreeViewModule,
    ButtonModule,
    ReactiveFormsModule,
    FormButtonsModule,
    DataGridModule,
    RouterModule.forChild([
      {
        path: '',
        component: SystemRoleViewComponent,
        data: { breadCrum: 'View', title: 'Roles', claimType: 'canViewRoles' },
        canActivate: [ActivationGuard]
      },
      {
        path: 'add',
        component: SystemRoleFormComponent,
        data: { breadCrum: 'Add', title: 'Add Role', claimType: 'canAddRoles' },
        canActivate: [ActivationGuard]
      },
      {
        path: ':roleId/update',
        component: SystemRoleFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Role',
          claimType: 'canEditRoles'
        },
        canActivate: [ActivationGuard]
      }
    ])
  ],
  declarations: [SystemRoleFormComponent, SystemRoleViewComponent]
})
export class SystemRoleModule {}
