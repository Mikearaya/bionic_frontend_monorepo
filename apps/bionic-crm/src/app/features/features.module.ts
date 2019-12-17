import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DefaultLayoutModule } from '@bionic/components/default-layout';
import { NAVIGATION_LINKS } from './navigation-data.model';
import { CrmReportApiModule } from '@bionic/apis/crm/crm-report-api';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [FeaturesComponent, DashboardComponent],
  imports: [
    CommonModule,
    CrmReportApiModule,
    DefaultLayoutModule.forRoot({ ROUTES: NAVIGATION_LINKS }),
    FeaturesRoutingModule
  ]
})
export class FeaturesModule {}
