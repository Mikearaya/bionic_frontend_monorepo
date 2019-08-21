import { CustomGridColumns } from '@bionic/components/data-grid';

export const purchaseOrderPaymentColumnBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', visible: false, type: 'number', width: 40 },
  {
    key: 'Vendor',
    header: 'Vendor',
    visible: true,
    type: 'string',
    width: 150
  },
  {
    key: 'PurchaseOrderId',
    header: 'Purchase Order',
    visible: true,
    type: 'number',
    width: 70,
    format: '#'
  },
  {
    key: 'CheckNo',
    header: 'Check No.',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'Date',
    header: 'Date',
    visible: true,
    type: 'date',
    width: 60,
    format: 'yMd'
  },
  {
    key: 'Amount',
    header: 'Ordered',
    visible: true,
    type: 'date',
    width: 60,
    format: 'yMd'
  },
  {
    key: 'ShippedDate',
    header: 'Shipped date',
    visible: false,
    type: 'date',
    width: 40,
    format: 'yMd'
  },
  {
    key: 'DateAdded',
    header: 'Create',
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
