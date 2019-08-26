import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemLookupFormComponent } from './system-lookup-form/system-lookup-form.component';
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
    SystemLookupSelectorModule
  ],
  declarations: [SystemLookupFormComponent],
  exports: [SystemLookupFormComponent]
})
export class SystemLookupModule {}
