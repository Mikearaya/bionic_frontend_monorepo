import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { DefaultLayoutModule } from '@bionic/components/default-layout';
import { NAVIGATION_LINKS } from './navigation-data.model';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    DefaultLayoutModule.forRoot({ ROUTES: NAVIGATION_LINKS }),
    FeaturesRoutingModule
  ]
})
export class FeaturesModule {}
