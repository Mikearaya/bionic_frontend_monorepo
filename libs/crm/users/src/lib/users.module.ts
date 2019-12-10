import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';
import { UserViewComponent } from './user-view/user-view.component';
import { DataGridModule } from '@bionic/components/data-grid';
import { SystemUsersApiModule } from '@bionic/apis/common/system-users-api';
import { SystemUsersModule } from '@bionic/components/system-users';
import { NotificationModule } from '@bionic/components/notification';

@NgModule({
  imports: [
    CommonModule,
    SystemUsersApiModule.forRoot({ apiUrl: 'system-user' }),
    SystemUsersModule,
    NotificationModule,
    DataGridModule,

    RouterModule.forChild([
      {
        path: '',
        component: UserViewComponent,
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
  declarations: [UserFormComponent, UserViewComponent]
})
export class UsersModule {}
