import { CustomGridColumns } from '@bionic/components/data-grid';

export const unitOfMeasurementColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: false,
    type: 'number',
    format: ''
  },
  {
    key: 'Name',
    header: 'Unit',
    visible: true,
    type: 'string',
    format: ''
  },
  {
    key: 'Abbrevation',
    header: 'Abrevation',
    visible: true,
    type: 'string',
    width: 50,
    format: ''
  },
  {
    key: 'Active',
    header: 'Active',
    visible: true,
    type: 'string',
    width: 30
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'date',
    width: 40,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    width: 40,
    format: 'yMd'
  }
];
