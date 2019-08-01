import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleFormComponent } from './role-form/role-form.component';
import { RoleViewComponent } from './role-view/role-view.component';
import { SystemRolesApiModule } from '@bionic/apis/common/system-roles-api';
import { SystemRoleModule } from '@bionic/components/system-role';
import { DataGridModule } from '@bionic/components/data-grid';
import { ROLES } from './system-role.model';
@NgModule({
  imports: [
    CommonModule,
    DataGridModule,
    SystemRolesApiModule.forRoot({
      ROLES: ROLES
    }),
    SystemRoleModule,

    RouterModule.forChild([
      {
        path: '',
        component: RoleViewComponent,
        data: {
          breadCrum: 'View',
          title: 'System Roles',
          claimType: 'canViewRoles'
        }
      },
      {
        path: 'add',
        component: RoleFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'New Role',
          claimType: 'canAddRoles'
        }
      },
      {
        path: ':roleId/update',
        component: RoleFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update Role',
          claimType: 'canEditRoles'
        }
      }
    ])
  ],
  declarations: [RoleFormComponent, RoleViewComponent]
})
export class RolesModule {}
