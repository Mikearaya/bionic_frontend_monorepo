import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    data: { breadCrum: 'Home', title: 'Home', breadCrum: 'Home' },
    children: [
      {
        path: 'procurments',
        loadChildren: '../modules/procurment/procurment.module#ProcurmentModule'
      },
      {
        path: 'inventory',
        loadChildren: '../modules/inventory/inventory.module#InventoryModule',
        data: {
          title: 'Inventory',
          breadCrum: 'Home',
          claimType: 'canAccessInventory'
        }
      },
      {
        path: 'crm',
        loadChildren: '../modules/crm/crm.module#CRMModule'
      },
      { path: 'users', loadChildren: '@bionic/wrp/users#UsersModule' },
      { path: 'roles', loadChildren: '@bionic/wrp/roles#RolesModule' },
      {
        path: 'system-lookup',
        loadChildren: '@bionic/wrp/system-lookup#SystemLookupModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
