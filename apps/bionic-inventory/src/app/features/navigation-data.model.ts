import { DefaultLayoutModel } from '@bionic/components/default-layout';

export const NAVIGATION_LINKS: DefaultLayoutModel[] = [
  {
    id: '00',
    name: 'Dashboard',
    enabled: true,
    expanded: false,
    url: '/',
    selected: true,
    icon: 'fas fa-tachometer-alt',
    privilage: 'canViewDashboard'
  },
  {
    id: '01',
    name: 'Items',
    expanded: false,
    enabled: true,
    url: '/items',
    icon: 'fas fa-handshake',
    selected: false,
    privilage: 'canViewItems'
  },
  {
    id: '02',
    name: 'Stock Batchs',
    expanded: false,
    enabled: true,
    url: '/stock-batchs',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewStockBatchs'
  },
  {
    id: '03',
    name: 'Write Offs',
    expanded: false,
    enabled: true,
    url: '/write-offs',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewWriteOffs'
  },
  {
    id: '04',
    name: 'Stock Movements',
    expanded: false,
    enabled: true,
    url: '/stock-movements',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewStockMovements'
  },
  {
    id: '05',
    name: 'Shipments',
    expanded: false,
    enabled: true,
    url: '/shipments',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewShipments'
  },
  {
    id: '06',
    name: 'Critical Inventory',
    expanded: false,
    enabled: true,
    url: '/critical-inventories',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewCriticalInventories'
  },
  {
    id: '07',
    name: 'Settings',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '07-01',
        name: 'Lookups',
        url: '/settings/system-lookups',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '07-02',
        name: 'Role',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '07-03',
        name: 'Users',
        url: '/settings/users',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewUsers'
      },
      {
        id: '07-04',
        name: 'Item Groups',
        url: '/settings/item-groups',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '07-05',
        name: 'Unit of Measurments',
        url: '/settings/unit-of-measurments',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewUsers'
      },
      {
        id: '07-06',
        name: 'Storage Locations',
        url: '/settings/storage-locations',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      }
    ]
  },
  {
    id: '08',
    name: 'Reports',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-briefcase',
    privilage: 'canViewReports',
    subChild: []
  }
];
