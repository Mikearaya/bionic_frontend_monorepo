import { SystemsRoles } from '@bionic/apis/common/system-roles-api';

export const ROLES: SystemsRoles[] = [
  {
    function: 'Items',
    view: 'canViewItems',
    add: 'canAddItems',
    edit: 'canEditItems',
    delete: 'canDeleteItems',
    others: []
  },
  {
    function: 'Item Categories',
    view: 'canViewItemCategories',
    add: 'canAddItemCategories',
    edit: 'canEditItemCategories',
    delete: 'canDeleteItemCategories',
    others: []
  },
  {
    function: 'Write Offs',
    view: 'canViewWriteOffs',
    add: 'canAddWriteOffs',
    edit: 'canEditWriteOffs',
    delete: 'canDeleteWriteOffs',
    others: []
  },
  {
    function: 'Stock Batchs',
    view: 'canViewStockBatchs',
    add: 'canAddStockBatchs',
    edit: 'canEditStockBatchs',
    delete: 'canDeleteStockBatchs',
    others: []
  },
  {
    function: 'Unit of Measurments',
    view: 'canViewUnitOfMeasurments',
    add: 'canAddUnitOfMeasurments',
    edit: 'canEditUnitOfMeasurments',
    delete: 'canDeleteUnitOfMeasurments',
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
