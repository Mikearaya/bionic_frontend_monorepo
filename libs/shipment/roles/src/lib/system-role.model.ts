import { SystemsRoles } from '@bionic/apis/common/system-roles-api';

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
    function: 'Trailors',
    view: 'canViewTrailors',
    add: 'canAddTrailors',
    edit: 'canEditTrailors',
    delete: 'canDeleteTrailors',
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
    function: 'Drivers',
    view: 'canViewDrivers',
    add: 'canAddDrivers',
    edit: 'canEditDrivers',
    delete: 'canDeleteDrivers',
    others: []
  },
  {
    function: 'Operations',
    view: 'canViewOperations',
    add: 'canAddOperations',
    edit: 'canEditOperations',
    delete: 'canDeleteOperations',
    others: []
  },
  {
    function: 'Payment Requests',
    view: 'canViewPaymentRequests',
    add: 'canAddPaymentRequests',
    edit: 'canEditPaymentRequests',
    delete: 'canDeletePaymentRequests',
    others: []
  },
  {
    function: 'Payment Recievings',
    view: 'canViewPaymentRecievings',
    add: 'canAddPaymentRecievings',
    edit: 'canEditPaymentRecievings',
    delete: 'canDeletePaymentRecievings',
    others: []
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
    function: 'Bank Accounts',
    view: 'canViewBankAccounts',
    add: 'canAddBankAccounts',
    edit: 'canEditBankAccounts',
    delete: 'canDeleteBankAccounts',
    others: []
  },
  {
    function: 'Locations',
    view: 'canViewLocations',
    add: 'canAddLocations',
    edit: 'canEditLocations',
    delete: 'canDeleteLocations',
    others: []
  },
  {
    function: 'Distances',
    view: 'canViewDistances',
    add: 'canAddDistances',
    edit: 'canEditDistances',
    delete: 'canDeleteDistances',
    others: []
  }
];
