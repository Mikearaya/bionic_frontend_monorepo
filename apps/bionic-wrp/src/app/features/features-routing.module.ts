import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeaturesComponent } from './features.component';
import { AccessControlApiModule } from '@bionic/apis/common/access-control-api';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    data: { breadCrum: 'Home', title: 'Home' },

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
      {
        path: 'settings',
        loadChildren: '../modules/settings/settings.module#SettingsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), AccessControlApiModule],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {}
