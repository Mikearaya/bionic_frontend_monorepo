import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { SecurityService } from '@bionic/services/security-service';
import { PageInformationsModule } from '@bionic/components/page-informations';
import {
  SidebarModule,
  TreeViewAllModule
} from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    SidebarModule,
    TreeViewAllModule,
    ButtonModule,

    RouterModule.forRoot([
      {
        path: '',
        data: { breadCrum: 'Home' },
        children: [
          {
            path: 'customers',
            loadChildren: '@bionic/rent/customers#CustomersModule',
            data: { breadCrum: 'Customers' }
          },
          {
            path: 'vehicle-rent',
            loadChildren: '@bionic/rent/vehicle-rent#VehicleRentModule',
            data: { breadCrum: 'Rent' }
          },
          {
            path: 'vehicles',
            loadChildren: '@bionic/rent/vehicles#VehiclesModule',
            data: { breadCrum: 'Vehicle' }
          },
          {
            path: 'vehicle-owners',
            loadChildren: '@bionic/rent/vehicle-owners#VehicleOwnersModule',
            data: { breadCrum: 'Vehicle Owners' }
          },
          {
            path: 'customer-payments',
            loadChildren: '@bionic/rent/customer-payment#CustomerPaymentModule',
            data: { breadCrum: 'Customer Payments' }
          },
          {
            path: 'partner-payments',
            loadChildren: '@bionic/rent/partners-payment#PartnersPaymentModule',
            data: { breadCrum: 'Partner Payments' }
          }
        ]
      }
    ])
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
