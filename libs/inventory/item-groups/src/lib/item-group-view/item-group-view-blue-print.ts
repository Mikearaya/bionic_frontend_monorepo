import { CustomGridColumns } from '@bionic/components/data-grid';

export const itemGroupColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'GroupName',
    header: 'Group Name',
    visible: true,
    type: 'string'
  },
  {
    key: 'Description',
    header: 'Description',
    visible: false,
    type: 'string',
    width: 50
  },
  {
    key: 'ParentGroup',
    header: 'Parent',
    visible: false,
    type: 'string',
    width: 50
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'datetime',
    width: 50,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'string',
    width: 50,
    format: 'yMd'
  }
];
