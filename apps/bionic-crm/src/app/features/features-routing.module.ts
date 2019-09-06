import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
