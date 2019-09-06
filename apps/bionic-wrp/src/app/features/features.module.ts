import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [CommonModule, ToolbarModule, FeaturesRoutingModule]
})
export class FeaturesModule {}
