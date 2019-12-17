import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AuthorizationGuard } from '@bionic/apis/common/access-control-api';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    data: { breadCrum: 'Home' },
    children: [
      {
        path: '',
        component: DashboardComponent,
        data: {
          breadCrum: 'Dashboard',
          title: 'Dashboard',
          claimType: 'canViewCrmDashboard'
        }
      },

      {
        path: 'customers',
        loadChildren: () =>
          import('@bionic/crm/customer').then(mod => mod.CustomerModule),
        data: { breadCrum: 'Customers', claimType: 'canViewCustomers' }
      },
      {
        path: 'customer-orders',
        loadChildren: () =>
          import('@bionic/crm/customer-order').then(
            mod => mod.CustomerOrderModule
          ),
        data: {
          breadCrum: 'Customer Orders',
          claimType: 'canViewCustomerOrders'
        }
      },
      {
        path: 'customer-invoices',
        loadChildren: () =>
          import('@bionic/crm/customer-invoice').then(
            mod => mod.CustomerInvoiceModule
          ),
        data: {
          breadCrum: 'Customer Invoices',
          claimType: 'canViewCustomerInvoices'
        }
      },
      {
        path: 'invoice-payments',
        loadChildren: () =>
          import('@bionic/crm/customer-invoice-payment').then(
            mod => mod.CustomerInvoicePaymentModule
          ),
        data: {
          breadCrum: 'Invoice Payment',
          claimType: 'canViewCustomerInvoicePayments'
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
              import('@bionic/crm/roles').then(mod => mod.RolesModule),
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' }
          },
          {
            path: 'users',
            loadChildren: () =>
              import('@bionic/crm/users').then(mod => mod.UsersModule),
            data: { breadCrum: 'Users', claimType: 'canViewUsers' }
          },
          {
            path: 'system-lookups',
            loadChildren: () =>
              import('@bionic/crm/lookup').then(mod => mod.LookupModule),
            data: {
              breadCrum: 'System Lookups',
              claimType: 'canViewSystemLookups'
            }
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
