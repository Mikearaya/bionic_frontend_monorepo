import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SystemLookupFormComponent } from './system-lookup-form/system-lookup-form.component';
import { SystemLookupViewComponent } from './system-lookup-view/system-lookup-view.component';
import { SystemLookupApiModule } from '@bionic/apis/common/system-lookup-api';
import { ReactiveFormsModule } from '@angular/forms';
import { DataGridModule } from '@bionic/components/data-grid';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { FormButtonsModule } from '@bionic/components/form-buttons';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { SystemLookupSelectorModule } from './system-lookup-selector/system-lookup-selector.module';
@NgModule({
  imports: [
    CommonModule,
    SystemLookupApiModule,
    DropDownListModule,
    DataGridModule,
    FormButtonsModule,
    ButtonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: SystemLookupViewComponent,
        data: {
          breadCrum: 'View',
          title: 'System Lookups',
          claim: 'canViewSystemLookups'
        }
      },
      {
        path: 'add',
        component: SystemLookupFormComponent,
        data: {
          breadCrum: 'Add',
          title: 'Add System Lookup',
          claim: 'canAddSystemLookups'
        }
      },
      {
        path: ':lookupId/update',
        component: SystemLookupFormComponent,
        data: {
          breadCrum: 'Update',
          title: 'Update System Lookup',
          claim: 'canUpdateSystemLookups'
        }
      }
    ]),
    SystemLookupSelectorModule
  ],
  declarations: [SystemLookupFormComponent, SystemLookupViewComponent],
  exports: [SystemLookupFormComponent, SystemLookupViewComponent]
})
export class SystemLookupModule {}
