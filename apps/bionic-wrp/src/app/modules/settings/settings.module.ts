import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsDashboardComponent } from './settings-dashboard/settings-dashboard.component';
import { EntryComponent } from './entry/entry.component';
import { DefaultToolbarModule } from '@bionic/components/default-layout';

@NgModule({
  declarations: [SettingsDashboardComponent, EntryComponent],
  imports: [CommonModule, SettingsRoutingModule, DefaultToolbarModule]
})
export class SettingsModule {}
