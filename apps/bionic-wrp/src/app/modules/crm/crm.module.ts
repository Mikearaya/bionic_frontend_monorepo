import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CRMRoutingModule } from './crm-routing.module';
import { EntryComponent } from './entry/entry.component';

import { DefaultToolbarModule } from '@bionic/components/default-layout';

@NgModule({
  declarations: [EntryComponent],
  imports: [CommonModule, CRMRoutingModule, DefaultToolbarModule]
})
export class CRMModule {}
