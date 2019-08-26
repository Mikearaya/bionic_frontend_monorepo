import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemLookupFormComponent } from './system-lookup-form/system-lookup-form.component';
import { SystemLookupViewComponent } from './system-lookup-view/system-lookup-view.component';
import { SystemLookupModule } from '@bionic/components/system-lookup';
import { SystemLookupApiModule } from '@bionic/apis/common/system-lookup-api';
import { DataGridModule } from '@bionic/components/data-grid';
import { NotificationModule } from '@bionic/components/notification';

@NgModule({
  imports: [
    CommonModule,
    SystemLookupModule,
    SystemLookupApiModule,
    NotificationModule,
    DataGridModule,

    RouterModule.forChild([
      {
        path: '',
        component: SystemLookupViewComponent,
        data: {
          breadCrum: 'View',
          title: 'System Lookups',
          claimType: 'canViewSystemLookups'
        }
      },
      {
        path: 'add',
        component: SystemLookupFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'Add System Lookup',
          claimType: 'canAddSystemLookups'
        }
      },
      {
        path: ':lookupId/update',
        component: SystemLookupFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update System Lookup',
          claimType: 'canEditSystemLookups'
        }
      }
    ])
  ],
  declarations: [SystemLookupFormComponent, SystemLookupViewComponent]
})
export class LookupModule {}
