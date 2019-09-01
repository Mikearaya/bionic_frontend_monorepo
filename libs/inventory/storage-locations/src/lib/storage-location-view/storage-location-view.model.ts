import { CustomGridColumns } from '@bionic/components/data-grid';

export const storageLocationColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'Id',
    visible: false,
    type: 'number',
    width: 30
  },
  {
    key: 'Name',
    header: 'Name',
    visible: true,
    type: 'string'
  },
  {
    key: 'Active',
    header: 'Active',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'date',
    format: 'yMd',
    width: 50
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    format: 'yMd',
    width: 50
  }
];
