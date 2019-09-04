import { CustomGridColumns } from '@bionic/components/data-grid';

export const writeOffColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: true,
    type: 'number',
    width: 20
  },
  {
    key: 'Item',
    header: 'Item',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'ItemId',
    header: 'Item Id',
    visible: false,
    type: 'number',
    width: 20
  },

  {
    key: 'Quantity',
    header: 'Quantity',
    visible: true,
    type: 'number',
    width: 25
  },
  {
    key: 'Uom',
    header: 'UOM',
    visible: true,
    type: 'string',
    width: 25
  },
  {
    key: 'TotalCost',
    header: 'Total Cost',
    visible: true,
    type: 'number',
    width: 30
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  }
];
