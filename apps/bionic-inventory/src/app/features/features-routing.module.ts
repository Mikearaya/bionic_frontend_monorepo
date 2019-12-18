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
        data: { breadCrm: 'Dashboard', title: 'Dashboard' }
      },
      {
        path: 'items',
        data: {
          breadCrum: 'Items',
          claimType: 'canViewItems'
        },
        loadChildren: () =>
          import('@bionic/inventory/item').then(mod => mod.ItemModule)
      },
      {
        path: 'critical-inventories',
        loadChildren: () =>
          import('@bionic/inventory/critical-inventory').then(
            mod => mod.CriticalInventoryModule
          ),
        data: {
          breadCrum: 'Critical Items',
          claimType: 'canViewCriticalInventories'
        }
      },
      {
        path: 'inventory',
        loadChildren: () =>
          import('@bionic/inventory/inventory-count').then(
            mod => mod.InventoryCountModule
          ),
        data: {
          breadCrum: 'Inventory',
          claimType: 'canViewInventory'
        }
      },
      {
        path: 'stock-batchs',
        loadChildren: () =>
          import('@bionic/inventory/stock-batch').then(
            mod => mod.StockBatchModule
          ),
        data: {
          breadCrum: 'Stock Batchs',
          claimType: 'canViewStockBatchs'
        }
      },
      {
        path: 'write-offs',
        loadChildren: () =>
          import('@bionic/inventory/write-offs').then(
            mod => mod.WriteOffsModule
          ),
        data: {
          breadCrum: 'Write Offs',
          claimType: 'canViewWriteOffs'
        }
      },
      {
        path: 'shipments',
        loadChildren: () =>
          import('@bionic/inventory/shipment').then(mod => mod.ShipmentModule),
        data: {
          breadCrum: 'Shipments',
          claimType: 'canViewShipments'
        }
      },
      {
        path: 'stock-movements',
        loadChildren: () =>
          import('@bionic/inventory/stock-movement').then(
            mod => mod.StockMovementModule
          )
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
              import('@bionic/inventory/roles').then(mod => mod.RolesModule),
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: () =>
              import('@bionic/inventory/users').then(mod => mod.UsersModule),
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'system-lookups',
            loadChildren: () =>
              import('@bionic/inventory/system-lookup').then(
                mod => mod.LookupModule
              ),
            data: {
              breadCrum: 'System Lookups',
              claimType: 'canViewSystemLookups'
            }
          },
          {
            path: 'item-groups',
            loadChildren: () =>
              import('@bionic/inventory/item-groups').then(
                mod => mod.ItemGroupsModule
              ),
            data: { breadCrum: 'Item Groups', claimType: 'canViewItemGroups' }
          },
          {
            path: 'unit-of-measurments',
            loadChildren: () =>
              import('@bionic/inventory/unit-of-measurments').then(
                mod => mod.UnitOfMeasurmentsModule
              ),
            data: {
              breadCrum: 'Unit Of Measurments',
              claimType: 'canViewUnitOfMeasurments'
            }
          },
          {
            path: 'storage-locations',
            loadChildren: () =>
              import('@bionic/inventory/storage-locations').then(
                mod => mod.StorageLocationsModule
              ),
            data: {
              breadCrum: 'Storage Locations',
              claimType: 'canViewStorageLocations'
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
