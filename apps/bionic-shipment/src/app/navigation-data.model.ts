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
    name: 'Drivers',
    expanded: false,
    enabled: true,
    url: '/drivers',
    icon: 'fas fa-handshake',
    selected: false,
    privilage: 'canViewPartners'
  },
  {
    id: '02',
    name: 'Vehicles',
    expanded: false,
    enabled: true,
    url: '/vehicles',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewVehicles'
  },
  {
    id: '03',
    name: 'Customers',
    expanded: false,
    enabled: true,
    url: '/customers',
    selected: false,
    icon: 'fas fa-address-book',
    privilage: 'canViewCustomers'
  },
  {
    id: '05',
    name: 'Operations',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-file-contract',
    privilage: 'canViewSettings'
  },
  {
    id: '06',
    name: 'Payments',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cash-register',
    privilage: 'canViewSettings',
    subChild: []
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
        id: '04-02',
        name: 'Locations',
        url: '/settings/locations',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '04-03',
        name: 'Role',
        url: '/settings/system-roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '04-04',
        name: 'Users',
        url: '/settings/system-users',
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
