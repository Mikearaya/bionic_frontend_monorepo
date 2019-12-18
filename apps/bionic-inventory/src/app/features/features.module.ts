import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DefaultLayoutModule } from '@bionic/components/default-layout';
import { NAVIGATION_LINKS } from './navigation-data.model';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { InventoryReportApiModule } from '@bionic/apis/inventory/inventory-report-api';

@NgModule({
  declarations: [FeaturesComponent, DashboardComponent],
  imports: [
    CommonModule,
    InventoryReportApiModule,
    DefaultLayoutModule.forRoot({ ROUTES: NAVIGATION_LINKS }),
    FeaturesRoutingModule
  ]
})
export class FeaturesModule {}
