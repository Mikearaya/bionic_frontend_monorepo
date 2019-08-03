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
        path: 'purchase-orders',
        loadChildren: '@bionic/procurment/purchase-order#PurchaseOrderModule',
        data: {
          breadCrum: 'Purchase orders',
          title: 'Purchase Order',
          claimType: 'canViewPurchaseOrders'
        }
      },
      {
        path: 'purchase-recievings',
        loadChildren:
          '@bionic/procurment/purchase-recieving#PurchaseRecievingModule',
        data: {
          breadCrum: 'Purchase requests',
          title: 'Purchase requests',
          claimType: 'canViewPurchaseRequests'
        }
      },
      {
        path: 'vendors',
        loadChildren: '@bionic/procurment/vendor#VendorModule',
        data: {
          breadCrum: 'Vendors',
          title: 'Vendors',
          claimType: 'canViewVendors'
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
            path: 'roles',
            loadChildren: '@bionic/procurment/roles#RolesModule',
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: '@bionic/procurment/users#UsersModule',
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
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
