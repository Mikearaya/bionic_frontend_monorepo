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
    url: '/vendors',
    icon: 'fas fa-handshake',
    selected: false,
    privilage: 'canViewPartners'
  },
  {
    id: '02',
    name: 'Stock Batchs',
    expanded: false,
    enabled: true,
    url: '/purchase-terms',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewPurchaseTerms'
  },
  {
    id: '03',
    name: 'Write Offs',
    expanded: false,
    enabled: true,
    url: '/purchase-order-payments',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewPurchaseOrderPayments'
  },
  {
    id: '04',
    name: 'Stock Movements',
    expanded: false,
    enabled: true,
    url: '/purchase-orders',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewVehicles'
  },
  {
    id: '05',
    name: 'Settings',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '05-01',
        name: 'Lookups',
        url: '/settings/system-lookups',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '05-02',
        name: 'Role',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '05-03',
        name: 'Users',
        url: '/settings/users',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewUsers'
      },
      {
        id: '05-04',
        name: 'Item Groups',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '05-05',
        name: 'Unit of Measurments',
        url: '/settings/users',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewUsers'
      },
      {
        id: '05-06',
        name: 'Storage Locations',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      }
    ]
  },
  {
    id: '07',
    name: 'Reports',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-briefcase',
    privilage: 'canViewSettings',
    subChild: []
  }
];
