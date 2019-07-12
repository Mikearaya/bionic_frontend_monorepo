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
import { DynamicFormControlsModule } from '@bionic/components/dynamic-form-controls';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PageInformationsModule,
    SidebarModule,
    TreeViewAllModule,
    ButtonModule,
    DynamicFormControlsModule,

    RouterModule.forRoot([
      {
        path: 'home',
        loadChildren: '@bionic/rent/rent-dash-board#RentDashBoardModule',
        data: { breadCrum: 'home', title: 'Dashboard' }
      },
      {
        path: '',
        data: { breadCrum: 'Home' },
        children: [
          {
            path: '',
            redirectTo: '/home',
            pathMatch: 'full'
          },
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
          },
          {
            path: 'settings/system-lookups',
            loadChildren: '@bionic/components/system-lookup#SystemLookupModule',
            data: { breadCrum: 'Settings > System Lookups' }
          },
          {
            path: 'settings/system-roles',
            loadChildren: '@bionic/components/system-role#SystemRoleModule'
          },
          {
            path: 'settings/system-users',
            loadChildren: '@bionic/components/system-users#SystemUsersModule'
          },
          {
            path: 'reports',
            loadChildren: '@bionic/rent/reports#ReportsModule',
            data: { breadCrum: 'Reports', title: 'Reports' }
          }
        ]
      }
    ])
  ],
  providers: [SecurityService],
  bootstrap: [AppComponent]
})
export class AppModule {}
