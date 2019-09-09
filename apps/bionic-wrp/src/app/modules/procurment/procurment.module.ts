import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcurmentRoutingModule } from './procurment-routing.module';
import { DefaultToolbarModule } from '@bionic/components/default-layout';
import { EntryComponent } from './entry/entry.component';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, ProcurmentRoutingModule, DefaultToolbarModule]
})
export class ProcurmentModule {}
