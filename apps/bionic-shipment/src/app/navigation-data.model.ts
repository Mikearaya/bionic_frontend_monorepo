export const NAVIGATION_LINKS = [
  {
    id: '00',
    name: 'Dashboard',
    enabled: true,
    expanded: false,
    url: '',
    selected: true,
    icon: 'fas fa-columns'
  },
  {
    id: '01',
    name: 'Vehicles',
    expanded: false,
    enabled: true,
    url: 'parent',
    icon: 'fas fa-sitemap',
    selected: false,
    privilage: 'canViewAccount',
    subChild: [
      {
        id: '01-01',
        name: 'Vehicles',
        url: '/vehicle',
        expanded: false,
        selected: false,
        enabled: true,
        privilage: 'canViewVehicles'
      }
    ]
  },
  {
    id: '02',
    name: 'Drivers',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-book-open',
    subChild: [
      {
        id: '02-01',
        name: 'Drivers',
        url: '/vehicles',
        expanded: false,
        enabled: true,
        selected: false
      }
    ]
  },
  {
    id: '03',
    name: 'Customers Managment',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    subChild: [
      {
        id: '03-01',
        name: 'Customers',
        url: '/customers',
        expanded: false,
        enabled: true,
        selected: false
      }
    ]
  },
  {
    id: '10',
    name: 'Operations',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    subChild: [
      {
        id: '10-01',
        name: 'Operations',
        url: '/vehicle-rent',
        expanded: false,
        enabled: true,
        selected: false
      }
    ]
  },
  {
    id: '05',
    name: 'Operation Payments',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    subChild: [
      {
        id: '05-01',
        name: 'Payments',
        url: '/lookups',
        expanded: false,
        enabled: true,
        selected: false
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
    subChild: [
      {
        id: '04-01',
        name: 'lookups',
        url: '/lookups',
        expanded: false,
        enabled: true,
        selected: false
      },
      {
        id: '04-02',
        name: 'Locations',
        url: '/lookups',
        expanded: false,
        enabled: true,
        selected: false
      },
      {
        id: '04-03',
        name: 'Bank Accounts',
        url: '/lookups',
        expanded: false,
        enabled: true,
        selected: false
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
    subChild: []
  }
];
