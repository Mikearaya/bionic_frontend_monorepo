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
        loadChildren: () =>
          import('@bionic/procurment/purchase-order').then(
            mod => mod.PurchaseOrderModule
          ),
        data: {
          breadCrum: 'Purchase orders',
          title: 'Purchase Order',
          claimType: 'canViewPurchaseOrders'
        }
      },
      {
        path: 'purchase-recievings',
        loadChildren: () =>
          import('@bionic/procurment/purchase-recieving').then(
            mod => mod.PurchaseRecievingModule
          ),
        data: {
          breadCrum: 'Purchase requests',
          title: 'Purchase requests',
          claimType: 'canViewPurchaseRequests'
        }
      },
      {
        path: 'purchase-order-payments',
        loadChildren: () =>
          import('@bionic/procurment/purchase-order-payment').then(
            mod => mod.PurchaseOrderPaymentModule
          ),
        data: {
          breadCrum: 'Purchase Order Payment',
          title: 'Purchase Order Payments',
          claimType: 'canViewPurchaseOrderPayments'
        }
      },
      {
        path: 'purchase-terms',
        loadChildren: () =>
          import('@bionic/procurment/purchase-term').then(
            mod => mod.PurchaseTermModule
          ),
        data: {
          breadCrum: 'Purchase Terms',
          title: 'Purchase Terms',
          claimType: 'canViewPurchaseTerms'
        }
      },
      {
        path: 'vendors',
        loadChildren: () =>
          import('@bionic/procurment/vendor').then(mod => mod.VendorModule),
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
            loadChildren: () =>
              import('@bionic/procurment/roles').then(mod => mod.RolesModule),
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: () =>
              import('@bionic/procurment/users').then(mod => mod.UsersModule),
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'system-lookups',
            loadChildren: () =>
              import('@bionic/procurment/system-lookup').then(
                mod => mod.LookupModule
              )
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
