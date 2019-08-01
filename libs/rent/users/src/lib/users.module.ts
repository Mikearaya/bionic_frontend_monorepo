import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersViewComponent } from './users-view/users-view.component';
import { SystemUsersApiModule } from '@bionic/apis/common/system-users-api';
import { SystemUsersModule } from '@bionic/components/system-users';
import { DataGridModule } from '@bionic/components/data-grid';
@NgModule({
  imports: [
    CommonModule,
    SystemUsersApiModule.forRoot({ apiUrl: 'system-users' }),
    SystemUsersModule,
    DataGridModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersViewComponent,
        data: { title: 'Users', breadCrum: 'View', claimType: 'canViewUsers' }
      },
      {
        path: 'add',
        component: UsersFormComponent,
        data: {
          title: 'Create user',
          breadCrum: 'Add',
          claimType: 'canAddUsers'
        }
      },
      {
        path: ':userId/update',
        component: UsersFormComponent,
        data: {
          title: 'Update user',
          breadCrum: 'Update',
          claimType: 'canEditUsers'
        }
      }
    ])
  ],
  declarations: [UsersFormComponent, UsersViewComponent]
})
export class UsersModule {}
