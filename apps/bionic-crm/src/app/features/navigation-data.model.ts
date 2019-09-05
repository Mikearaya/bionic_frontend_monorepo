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
    name: 'Customers',
    expanded: false,
    enabled: true,
    url: '/customers',
    icon: 'fas fa-handshake',
    selected: false,
    privilage: 'canViewCustomers'
  },
  {
    id: '02',
    name: 'Customer Orders',
    expanded: false,
    enabled: true,
    url: '/customer-orders',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewCustomerOrders'
  },
  {
    id: '03',
    name: 'Invoices',
    expanded: false,
    enabled: true,
    url: '/invoices',
    selected: false,
    icon: 'fas fa-car',
    privilage: 'canViewInvoices'
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
        name: 'Role',
        url: '/settings/roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '04-03',
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
    id: '05',
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
