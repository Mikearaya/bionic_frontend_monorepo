import { CustomGridColumns } from '@bionic/components/data-grid';

export const customerViewColumnsBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    type: 'number',
    visible: false,
    width: 30
  },
  {
    key: 'FullName',
    header: 'Name',
    type: 'string',
    visible: true
  },
  {
    key: 'Type',
    header: 'Type',
    visible: true,
    width: 40,
    type: 'string'
  },
  {
    key: 'Tin',
    header: 'TIN No.',
    visible: false,
    type: 'string',
    width: 50
  },
  {
    key: 'DateAdded',
    header: 'Added',
    type: 'date',
    visible: false,
    width: 30,

  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    type: 'date',
    visible: false,
    width: 30,

  }
];
