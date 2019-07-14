export interface SystemsRoles {
  function: string;
  view: string;
  add: string;
  edit: string;
  delete: string;
  others: { title: string; value: string }[];
}

export const ROLES: SystemsRoles[] = [
  {
    function: 'Vehicles',
    view: 'canViewVehicles',
    add: 'canAddVehicles',
    edit: 'canEditVehicles',
    delete: 'canDeleteVehicles',
    others: []
  },
  {
    function: 'Partners',
    view: 'canViewPartners',
    add: 'canAddPartners',
    edit: 'canEditPartners',
    delete: 'canDeletePartners',
    others: []
  },
  {
    function: 'Customers',
    view: 'canViewCustomers',
    add: 'canAddCustomers',
    edit: 'canEditCustomers',
    delete: 'canDeleteCustomers',
    others: []
  },
  {
    function: 'Rents',
    view: 'canViewRents',
    add: 'canAddRents',
    edit: 'canEditRents',
    delete: 'canDeleteRents',
    others: []
  },
  {
    function: 'Customer Payments',
    view: 'canViewCustomerPayments',
    add: 'canAddCustomerPayments',
    edit: '',
    delete: 'canDeleteCustomerPayments',
    others: [
      { title: 'Print Reciept', value: 'canPrintCustomerPaymentReciept' }
    ]
  },
  {
    function: 'Partner Payments',
    view: 'canViewPartnerPayments',
    add: 'canAddPartnerPayments',
    edit: '',
    delete: 'canDeletePartnerPayments',
    others: [{ title: 'Print Reciept', value: 'canPrintPartnerPaymentReciept' }]
  },
  {
    function: 'System Lookups',
    view: 'canViewSystemLookups',
    add: 'canAddSystemLookups',
    edit: 'canEditSystemLookups',
    delete: 'canDeleteSystemLookups',
    others: []
  },
  {
    function: 'Users',
    view: 'canViewUsers',
    add: 'canAddUsers',
    edit: 'canEditUsers',
    delete: 'canDeleteUsers',
    others: []
  },
  {
    function: 'Roles',
    view: 'canViewRoles',
    add: 'canAddRoles',
    edit: 'canEditRoles',
    delete: 'canDeleteRoles',
    others: []
  },
  {
    function: 'Rent History',
    view: 'canViewRentHistoryReport',
    add: '',
    edit: '',
    delete: '',
    others: []
  },
  {
    function: 'Remaining Customer Payments',
    view: 'canViewRemainingCustomerPaymentsReport',
    add: '',
    edit: '',
    delete: '',
    others: []
  },
  {
    function: 'Remaining Partner Payments',
    view: 'canViewRemainingPartnerPaymentsReport',
    add: '',
    edit: '',
    delete: '',
    others: []
  },
  {
    function: 'Customer Payments',
    view: 'canViewCustomerPaymentsReport',
    add: '',
    edit: '',
    delete: '',
    others: []
  },
  {
    function: 'Partner Payments',
    view: 'canViewPartnerPaymentsReport',
    add: '',
    edit: '',
    delete: '',
    others: []
  }
];
