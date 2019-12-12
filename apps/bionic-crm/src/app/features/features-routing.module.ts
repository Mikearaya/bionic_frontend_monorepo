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
        loadChildren: '@bionic/crm/customer#CustomerModule',
        data: { breadCrum: 'Customers', claimType: 'canViewCustomers' }
      },
      {
        path: 'customer-orders',
        loadChildren: '@bionic/crm/customer-order#CustomerOrderModule',
        data: {
          breadCrum: 'Customer Orders',
          claimType: 'canViewCustomerOrders'
        }
      },
      {
        path: 'customer-invoices',
        loadChildren: '@bionic/crm/customer-invoice#CustomerInvoiceModule',
        data: {
          breadCrum: 'Customer Invoices',
          claimType: 'canViewCustomerInvoices'
        }
      },
      {
        path: 'invoice-payments',
        loadChildren:
          '@bionic/crm/customer-invoice-payment#CustomerInvoicePaymentModule',
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
            loadChildren: '@bionic/crm/roles#RolesModule',
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: '@bionic/crm/users#UsersModule',
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'system-lookups',
            loadChildren: '@bionic/crm/lookup#LookupModule',
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
