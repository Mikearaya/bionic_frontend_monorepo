import { SystemsRoles } from '@bionic/apis/common/system-roles-api';

export const ROLES: SystemsRoles[] = [
  {
    function: 'Customers',
    view: 'canViewCustomers',
    add: 'canAddCustomers',
    edit: 'canEditCustomers',
    delete: 'canDeleteCustomers',
    others: []
  },
  {
    function: 'Customer Orders',
    view: 'canViewCustomerOrders',
    add: 'canAddCustomerOrders',
    edit: 'canEditCustomerOrders',
    delete: 'canDeleteCustomerOrders',
    others: []
  },
  {
    function: 'Invoice',
    view: 'canViewInvoices',
    add: 'canAddInvoices',
    edit: 'canEditInvoices',
    delete: 'canDeleteInvoices',
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
  }
];
