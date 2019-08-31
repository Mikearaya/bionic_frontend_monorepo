import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemGroupSelectorComponent } from './item-group-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ItemGroupsApiModule } from '@bionic/apis/inventory/item-groups-api';

@NgModule({
  declarations: [ItemGroupSelectorComponent],
  imports: [CommonModule, DropDownListModule, ItemGroupsApiModule],
  exports: [ItemGroupSelectorComponent]
})
export class ItemGroupSelectorModule {}
