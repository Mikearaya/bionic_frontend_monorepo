import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CRMRoutingModule {}
