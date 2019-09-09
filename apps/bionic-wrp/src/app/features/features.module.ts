import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';
import { PageInformationsModule } from '@bionic/components/page-informations';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    ToolbarModule,
    FeaturesRoutingModule,
    PageInformationsModule
  ]
})
export class FeaturesModule {}
