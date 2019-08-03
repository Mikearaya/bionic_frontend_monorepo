import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { FeaturesComponent } from './features.component';
import { PageInformationsModule } from '@bionic/components/page-informations';
import {
  SidebarModule,
  TreeViewAllModule
} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { AccessControlApiModule } from '@bionic/apis/common/access-control-api';

@NgModule({
  declarations: [FeaturesComponent],
  imports: [
    CommonModule,
    PageInformationsModule,
    AccessControlApiModule,
    SidebarModule,
    TreeViewAllModule,
    ButtonModule,
    FeaturesRoutingModule
  ]
})
export class FeaturesModule {}
