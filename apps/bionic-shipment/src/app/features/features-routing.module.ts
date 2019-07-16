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
        path: 'vehicles',
        loadChildren: '@bionic/rent/vehicles#VehiclesModule',
        data: { breadCrum: 'Vehicle', claimType: 'canViewVehicles' },
        canLoad: [AuthorizationGuard]
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
