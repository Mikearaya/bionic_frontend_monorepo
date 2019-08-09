import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemSelectorComponent } from './item-selector.component';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { ItemApiModule } from '@bionic/apis/inventory/item-api';

@NgModule({
  declarations: [ItemSelectorComponent],
  imports: [CommonModule, DropDownListModule, ItemApiModule],
  exports: [ItemSelectorComponent]
})
export class ItemSelectorModule {}
