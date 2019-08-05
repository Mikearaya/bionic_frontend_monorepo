import { CustomGridColumns } from '@bionic/components/data-grid';

export const purchaseTermColumnBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'Id', width: 40, visible: false, type: 'number' },
  {
    key: 'Vendor',
    header: 'Vendor',
    width: 150,
    visible: true,
    type: 'string'
  },
  { key: 'Item', header: 'Item', width: 150, visible: true, type: 'string' },
  {
    key: 'LeadTime',
    header: 'Lead Time',
    width: 50,
    visible: true,
    type: 'number'
  },
  {
    key: 'PaymentPeriod',
    header: 'PaymentPeriod',
    width: 50,
    visible: true,
    type: 'number'
  },
  {
    key: 'MiimumQuantity',
    header: 'Minimum Quantity',
    width: 50,
    visible: true,
    type: 'number'
  },
  {
    key: 'DateAdded',
    header: 'Added',
    width: 50,
    visible: false,
    type: 'date',
    format: 'dYm'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    width: 50,
    visible: false,
    type: 'date',
    format: 'dYm'
  }
];
