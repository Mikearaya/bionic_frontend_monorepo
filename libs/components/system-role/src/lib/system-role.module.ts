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

@NgModule({
  imports: [
    CommonModule,
    SystemRolesApiModule,
    TreeViewModule,
    ReactiveFormsModule,
    FormButtonsModule,
    DataGridModule,
    RouterModule.forChild([
      {
        path: '',
        component: SystemRoleViewComponent,
        data: { breadCrum: 'Roles', title: 'Roles' }
      },
      {
        path: 'add',
        component: SystemRoleFormComponent,
        data: { breadCrum: 'Add', title: 'Add Role' }
      },
      {
        path: ':roleId/update',
        component: SystemRoleFormComponent,
        data: { breadCrum: 'Update', title: 'Update Role' }
      }
    ])
  ],
  declarations: [SystemRoleFormComponent, SystemRoleViewComponent]
})
export class SystemRoleModule {}
