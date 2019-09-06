import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemUsersApiModule } from '@bionic/apis/common/system-users-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { UsersViewComponent } from './users-view/users-view.component';
import { UserFormComponent } from './user-form/user-form.component';
import { SystemUsersModule } from '@bionic/components/system-users';

@NgModule({
  imports: [
    CommonModule,
    SystemUsersApiModule.forRoot({ apiUrl: 'system-user' }),
    SystemUsersModule,
    DataGridModule,

    RouterModule.forChild([
      {
        path: '',
        component: UsersViewComponent,
        data: {
          title: 'System users',
          breadCrum: 'View',
          claimType: 'canViewUsers'
        }
      },
      {
        path: 'add',
        component: UserFormComponent,
        data: {
          title: 'New user',
          breadCrum: 'Add',
          claimType: 'canAddUsers'
        }
      },
      {
        path: ':userId/update',
        component: UserFormComponent,
        data: {
          title: 'Update user',
          breadCrum: 'Update',
          claimType: 'canEditUsers'
        }
      }
    ])
  ],
  declarations: [UserFormComponent, UsersViewComponent]
})
export class UsersModule {}
