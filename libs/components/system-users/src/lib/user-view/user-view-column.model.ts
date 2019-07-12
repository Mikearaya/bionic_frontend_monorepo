import { CustomGridColumns } from '@bionic/components/data-grid';

export const userColumnBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', visible: false, type: 'string', width: 40 },
  { key: 'UserName', header: 'Username', visible: true, type: 'string' },
  {
    key: 'PhoneNumber',
    header: 'Phonenumber',
    visible: true,
    type: 'string',
    width: 100
  },
  {
    key: 'Email',
    header: 'E-mail',
    visible: true,
    type: 'string',
    width: 100
  },
  {
    key: 'Role',
    header: 'Role',
    visible: true,
    type: 'string',
    width: 100
  }
];
