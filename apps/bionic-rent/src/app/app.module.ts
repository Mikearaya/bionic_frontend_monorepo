import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecurityService } from '@bionic/services/security-service';
import {
  PageInformationsModule,
  BreadCrumbComponent,
  PageIdentityComponent,
  PageTitleComponent
} from '@bionic/components/page-informations';
import {
  TreeViewModule,
  SidebarModule,
  ToolbarModule
} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [
    AppComponent,
    BreadCrumbComponent,
    PageIdentityComponent,
    PageTitleComponent
  ],
  imports: [
    BrowserModule,
    PageInformationsModule,
    TreeViewModule,
    SidebarModule,
    ButtonModule,
    ToolbarModule,

    RouterModule.forRoot(
      [
        {
          path: 'customers',
          loadChildren: '@bionic/rent/customers#CustomersModule'
        },
        {
          path: 'vehicle-rent',
          loadChildren: '@bionic/rent/vehicle-rent#VehicleRentModule'
        },
        {
          path: 'vehicle-owners',
          loadChildren: '@bionic/rent/vehicle-owners#VehicleOwnersModule'
        },
        {
          path: 'vehicles',
          loadChildren: '@bionic/rent/vehicles#VehiclesModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
