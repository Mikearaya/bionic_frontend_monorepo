import { CustomGridColumns } from '@bionic/components/data-grid';

export const systemRoleColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: false,
    type: 'string',
    width: 40
  },
  {
    key: 'Name',
    header: 'Role Name',
    visible: true,
    type: 'string'
  }
];
