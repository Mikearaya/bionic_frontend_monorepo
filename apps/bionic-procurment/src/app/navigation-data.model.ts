export const NAVIGATION_LINKS = [
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
    name: 'Vendors',
    expanded: false,
    enabled: true,
    url: '/vendors',
    icon: 'fas fa-handshake',
    selected: false,
    privilage: 'canViewPartners'
  },
  {
    id: '02',
    name: 'Purchase Orders',
    expanded: false,
    enabled: true,
    url: '/purchase-orders',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewVehicles'
  },
  {
    id: '08',
    name: 'Purchase Recievings',
    expanded: false,
    enabled: true,
    url: '/purchase-recievings',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewVehicles'
  },

  {
    id: '04',
    name: 'Settings',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '04-01',
        name: 'Lookups',
        url: '/settings/system-lookups',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '04-03',
        name: 'Role',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '04-04',
        name: 'Users',
        url: '/settings/users',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewUsers'
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
