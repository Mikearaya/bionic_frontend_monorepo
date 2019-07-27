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
        path: 'customers',
        loadChildren: '@bionic/rent/customers#CustomersModule',
        data: { breadCrum: 'Customers', claimType: 'canViewCustomers' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'drivers',
        loadChildren: '@bionic/shipment/drivers#DriversModule',
        data: {
          breadCrum: 'Drivers',
          title: 'Drivers',
          claimType: 'canViewDrivers'
        }
      },
      {
        path: 'operations',
        loadChildren: '@bionic/shipment/operations#OperationsModule',
        data: {
          breadCrum: 'Drivers',
          title: 'Drivers',
          claimType: 'canViewDrivers'
        }
      },
      {
        path: 'freight-orders',
        loadChildren: '@bionic/shipment/freight-order#FreightOrderModule',
        data: {
          breadCrum: 'Freight Orders',
          title: 'Freight Orders',
          claimType: 'canViewFreightOrders'
        }
      },
      {
        path: 'vehicles',
        loadChildren: '@bionic/rent/vehicles#VehiclesModule',
        data: { breadCrum: 'Vehicle', claimType: 'canViewVehicles' },
        canLoad: [AuthorizationGuard]
      },
      {
        path: 'trailors',
        loadChildren: '@bionic/shipment/vehicle-trailor#VehicleTrailorModule',
        data: { breadCrum: 'Trailors', claimType: 'canViewVehicles' }
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
            path: 'distances',
            loadChildren: '@bionic/shipment/distance#DistanceModule',
            data: {
              breadCrum: 'Distances',
              claimType: 'canViewSystemLookups'
            }
          },
          {
            path: 'bank-accounts',
            loadChildren: '@bionic/shipment/bank-account#BankAccountModule',
            data: {
              breadCrum: 'Banks',
              claimType: 'canViewBankAccounts'
            }
          },
          {
            path: 'system-roles',
            loadChildren: '@bionic/components/system-role#SystemRoleModule',
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'system-users',
            loadChildren: '@bionic/components/system-users#SystemUsersModule',
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'locations',
            loadChildren: '@bionic/shipment/location#LocationModule',
            data: { breadCrum: 'Locations', claimType: 'canViewLocations' }
          },
          {
            path: '',
            redirectTo: 'settings/system-lookups',
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
