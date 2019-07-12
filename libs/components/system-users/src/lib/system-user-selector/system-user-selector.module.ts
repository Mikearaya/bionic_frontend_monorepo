import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemUserSelectorComponent } from './system-user-selector/system-user-selector.component';
import { SystemUsersApiModule } from '@bionic/apis/common/system-users-api';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [SystemUserSelectorComponent],
  imports: [CommonModule, SystemUsersApiModule, DropDownListModule],
  exports: [SystemUserSelectorComponent]
})
export class SystemUserSelectorModule {}
