import { CustomGridColumns } from '@bionic/components/data-grid';

export const purchaseRecievingColumnBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', visible: true, type: 'number', width: 40 },
  {
    key: 'Vendor',
    header: 'Vendor',
    visible: true,
    type: 'string',
    width: 150
  },
  {
    key: 'ShippedDate',
    header: 'Shipped date',
    visible: true,
    type: 'date',
    width: 60,
    format: 'yMd'
  },
  {
    key: 'ExpectedDate',
    header: 'Expected date',
    visible: true,
    type: 'date',
    width: 60,
    format: 'yMd'
  },
  {
    key: 'TotalCost',
    header: 'Total cost',
    visible: false,
    type: 'number',
    width: 30,
    format: '#'
  },
  {
    key: 'AdditionalFee',
    header: 'Additional Fee',
    visible: false,
    type: 'number',
    width: 30,
    format: '#'
  },
  {
    key: 'dateAdded',
    header: 'Create',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  },
  {
    key: 'dateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  }
];
