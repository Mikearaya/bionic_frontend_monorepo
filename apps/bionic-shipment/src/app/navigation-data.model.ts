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
    name: 'Trailors',
    expanded: false,
    enabled: true,
    url: '/trailors',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewVehicles'
  },
  {
    id: '08',
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
    name: 'Customer Orders',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '05-01',
        name: 'Operations',
        expanded: false,
        enabled: true,
        url: '/operations',
        selected: false,
        icon: 'fas fa-file-contract',
        privilage: 'canViewSettings'
      },
      {
        id: '05-02',
        name: 'Freight Orders',
        expanded: false,
        enabled: true,
        url: '/freight-orders',
        selected: false,
        icon: 'fas fa-cash-register',
        privilage: 'canViewSettings'
      }
    ]
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
    subChild: [
      {
        id: '06-01',
        name: 'Payment Requests',
        url: '/payments/requests',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '06-02',
        name: 'Payment Recievings',
        url: '/payments/recievings',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      }
    ]
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
      },
      {
        id: '04-05',
        name: 'Bank Accounts',
        url: '/settings/bank-accounts',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
      },
      {
        id: '04-06',
        name: 'Distances',
        url: '/settings/distances',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewSystemLookups'
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
