import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthorizationGuard } from '@bionic/apis/common/access-control-api';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    data: { breadCrum: 'Home' },
    children: [
      {
        path: 'home',
        loadChildren: '@bionic/rent/rent-dash-board#RentDashBoardModule',
        data: { breadCrum: 'Dashboard' }
      },
      {
        path: 'customers',
        loadChildren: '@bionic/rent/customers#CustomersModule',
        data: { breadCrum: 'Customers', claimType: 'canViewCustomers' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'vehicle-rent',
        loadChildren: '@bionic/rent/vehicle-rent#VehicleRentModule',
        data: { breadCrum: 'Rent', claimType: 'canViewRents' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'vehicles',
        loadChildren: '@bionic/rent/vehicles#VehiclesModule',
        data: { breadCrum: 'Vehicle', claimType: 'canViewVehicles' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'vehicle-owners',
        loadChildren: '@bionic/rent/vehicle-owners#VehicleOwnersModule',
        data: { breadCrum: 'Vehicle Owners', claimType: 'canViewPartners' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'customer-payments',
        loadChildren: '@bionic/rent/customer-payment#CustomerPaymentModule',
        data: {
          breadCrum: 'Customer Payments',
          claimType: 'canViewCustomerPayments'
        },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'partner-payments',
        loadChildren: '@bionic/rent/partners-payment#PartnersPaymentModule',
        data: {
          breadCrum: 'Partner Payments',
          claimType: 'canViewPartnerPayments'
        }
      },
      {
        path: 'settings',
        data: {
          breadCrum: 'Settings',
          claimType: 'canViewSystemLookups'
        },
        children: [
          {
            path: 'system-lookups',
            loadChildren: '@bionic/components/system-lookup#SystemLookupModule',
            data: {
              breadCrum: 'System Lookups',
              claimType: 'canViewSystemLookups'
            },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'roles',
            loadChildren: '@bionic/rent/roles#RolesModule',
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: '@bionic/rent/users#UsersModule',
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          { path: '', redirectTo: 'settings/system-lookups', pathMatch: 'full' }
        ]
      },
      {
        path: 'reports',
        loadChildren: '@bionic/rent/reports#ReportsModule',
        data: { breadCrum: 'Reports', title: 'Reports' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
