export const NAVIGATION_LINKS = [
  {
    id: '00',
    name: 'Dashboard',
    enabled: true,
    expanded: false,
    url: '/',
    selected: true,
    icon: 'fas fa-columns',
    privilage: 'canViewDashboard'
  },
  {
    id: '01',
    name: 'Partners',
    expanded: false,
    enabled: true,
    url: '/vehicle-owners',
    icon: 'fas fa-sitemap',
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
    icon: 'fas fa-book-open',
    privilage: 'canViewVehicles'
  },
  {
    id: '03',
    name: 'Customers',
    expanded: false,
    enabled: true,
    url: '/customers',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewCustomers'
  },
  {
    id: '05',
    name: 'Rents',
    expanded: false,
    enabled: true,
    url: 'parent',
    selected: false,
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '05-01',
        name: 'Rents List',
        url: '/vehicle-rent',
        privilage: 'canViewRents',
        expanded: false,
        enabled: true,
        selected: false
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
    icon: 'fas fa-cogs',
    privilage: 'canViewSettings',
    subChild: [
      {
        id: '06-01',
        name: 'Customer Payments',
        url: '/customer-payments',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewCustomerPayments'
      },
      {
        id: '06-02',
        name: 'Partner Payments',
        url: '/partner-payments',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewPartnerPayments'
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
        name: 'Role',
        url: '/settings/system-roles',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRoles'
      },
      {
        id: '04-03',
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
    subChild: [
      {
        id: '07-00',
        name: 'Rent History',
        url: '/reports/rent-history',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewRentHistoryReport'
      },
      {
        id: '07-01',
        name: 'Remaining Customer Payments',
        url: '/reports/customer-payments',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewCustomerPaymentsReport'
      },
      {
        id: '07-02',
        name: 'Remaining Partner Payments',
        url: '/reports/partner-payments',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewPartnerPaymentsReport'
      },
      {
        id: '07-03',
        name: 'Customer Payments',
        url: '/reports/customer-payments-history',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewPartnerPaymentsReport'
      },
      {
        id: '07-04',
        name: 'Partner Payments',
        url: '/reports/partner-payments-history',
        expanded: false,
        enabled: true,
        selected: false,
        privilage: 'canViewPartnerPaymentsReport'
      }
    ]
  }
];
