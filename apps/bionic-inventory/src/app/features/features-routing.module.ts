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
        path: 'items',
        data: {
          breadCrum: 'Items',
          claimType: 'canViewItems'
        },
        loadChildren: '@bionic/inventory/item#ItemModule'
      },
      {
        path: 'critical-inventories',
        loadChildren:
          '@bionic/inventory/critical-inventory#CriticalInventoryModule',
        data: {
          breadCrum: 'Critical Items',
          claimType: 'canViewCriticalInventories'
        }
      },
      {
        path: 'stock-batchs',
        loadChildren: '@bionic/inventory/stock-batch#StockBatchModule',
        data: {
          breadCrum: 'Stock Batchs',
          claimType: 'canViewStockBatchs'
        }
      },
      {
        path: 'write-offs',
        loadChildren: '@bionic/inventory/write-offs#WriteOffsModule',
        data: {
          breadCrum: 'Write Offs',
          claimType: 'canViewWriteOffs'
        }
      },
      {
        path: 'shipments',
        loadChildren: '@bionic/inventory/shipment#ShipmentModule',
        data: {
          breadCrum: 'Shipments',
          claimType: 'canViewShipments'
        }
      },
      {
        path: 'stock-movements',
        loadChildren: '@bionic/inventory/stock-movement#StockMovementModule'
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
            loadChildren: '@bionic/inventory/roles#RolesModule',
            data: { breadCrum: 'Roles', claimType: 'canViewRoles' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'users',
            loadChildren: '@bionic/inventory/users#UsersModule',
            data: { breadCrum: 'Users', claimType: 'canViewUsers' },
            canLoad: [AuthorizationGuard]
          },
          {
            path: 'system-lookups',
            loadChildren: '@bionic/inventory/system-lookup#LookupModule',
            data: {
              breadCrum: 'System Lookups',
              claimType: 'canViewSystemLookups'
            }
          },
          {
            path: 'item-groups',
            loadChildren: '@bionic/inventory/item-groups#ItemGroupsModule',
            data: { breadCrum: 'Item Groups', claimType: 'canViewItemGroups' }
          },
          {
            path: 'unit-of-measurments',
            loadChildren:
              '@bionic/inventory/unit-of-measurments#UnitOfMeasurmentsModule',
            data: {
              breadCrum: 'Unit Of Measurments',
              claimType: 'canViewUnitOfMeasurments'
            }
          },
          {
            path: 'storage-locations',
            loadChildren:
              '@bionic/inventory/storage-locations#StorageLocationsModule',
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
