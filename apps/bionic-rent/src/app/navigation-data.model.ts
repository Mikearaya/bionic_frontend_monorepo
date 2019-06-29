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
    name: 'Partners Managment',
    expanded: false,
    enabled: true,
    url: 'parent',
    icon: 'fas fa-sitemap',
    selected: false,
    privilage: 'canViewAccount',
    subChild: [
      {
        id: '01-01',
        name: 'Vehicle Owners',
        url: '/vehicle-owners',
        expanded: false,
        selected: false,
        enabled: true,
        privilage: 'canViewAccount'
      },
      {
        id: '01-02',
        name: 'Partner Payments',
        url: '/partner-payments',
        expanded: false,
        enabled: true,
        selected: false
      }
    ]
  },
  {
    id: '02',
    name: 'Vehicles Managment',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-book-open',
    subChild: [
      {
        id: '02-01',
        name: 'Vehicles',
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
      },
      {
        id: '03-02',
        name: 'Customer Payments',
        url: '/customer-payments',
        expanded: false,
        enabled: true,
        selected: false
      }
    ]
  },
  {
    id: '05',
    name: 'Rents',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    subChild: [
      {
        id: '05-01',
        name: 'Rents List',
        url: '/vehicle-rent',
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
