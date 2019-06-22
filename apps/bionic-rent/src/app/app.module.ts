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
  TreeViewAllModule
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
    SidebarModule,
    TreeViewAllModule,
    ButtonModule,

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
          path: 'vehicles',
          loadChildren: '@bionic/rent/vehicles#VehiclesModule',
          data: { breadCrum: 'Vehicle' }
        },
        {
          path: 'vehicle-owners',
          loadChildren: '@bionic/rent/vehicle-owners#VehicleOwnersModule'
        }
      ],
      { initialNavigation: 'enabled' }
    )
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
