import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { EntryComponent } from './entry/entry.component';
import { DefaultToolbarModule } from '@bionic/components/default-layout';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';

@NgModule({
  declarations: [EntryComponent, InventoryDashboardComponent],
  imports: [CommonModule, InventoryRoutingModule, DefaultToolbarModule]
})
export class InventoryModule {}
