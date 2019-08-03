import { SystemsRoles } from '@bionic/apis/common/system-roles-api';

export const ROLES: SystemsRoles[] = [
  {
    function: 'Purchase Orders',
    view: 'canViewPurchaseOrders',
    add: 'canAddPurchaseOrders',
    edit: 'canEditPurchaseOrders',
    delete: 'canDeletePurchaseOrders',
    others: []
  },
  {
    function: 'Purchase Requests',
    view: 'canViewPurchaseRequests',
    add: 'canAddPurchaseRequests',
    edit: 'canEditPurchaseRequests',
    delete: 'canDeletePurchaseRequests',
    others: []
  },
  {
    function: 'Vendors',
    view: 'canViewVendors',
    add: 'canAddVendors',
    edit: 'canEditVendors',
    delete: 'canDeleteVendors',
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
