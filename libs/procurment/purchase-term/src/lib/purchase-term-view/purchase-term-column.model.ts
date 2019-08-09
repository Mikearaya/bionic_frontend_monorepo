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
  {
    key: 'VendorProductId',
    header: 'Product Id',
    width: 80,
    visible: true,
    type: 'string'
  },
  { key: 'Item', header: 'Item', width: 150, visible: true, type: 'string' },
  {
    key: 'Leadtime',
    header: 'Lead Time',
    width: 80,
    visible: true,
    type: 'number'
  },
  {
    key: 'PaymentPeriod',
    header: 'PaymentPeriod',
    width: 90,
    visible: false,
    type: 'number'
  },
  {
    key: 'MinimumQuantity',
    header: 'Minimum Qty',
    width: 90,
    visible: true,
    type: 'number'
  },
  {
    key: 'UnitPrice',
    header: 'Unit Price',
    width: 50,
    visible: false,
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
