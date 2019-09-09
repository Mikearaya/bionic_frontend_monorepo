import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryComponent } from './entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: EntryComponent,
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
        path: 'inventory',
        loadChildren: '@bionic/inventory/inventory-count#InventoryCountModule',
        data: {
          breadCrum: 'Inventory',
          claimType: 'canViewInventory'
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
export class InventoryRoutingModule {}
