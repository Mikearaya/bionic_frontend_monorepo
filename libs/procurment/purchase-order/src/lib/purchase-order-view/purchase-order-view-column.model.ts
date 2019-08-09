import { CustomGridColumns } from '@bionic/components/data-grid';

export const purchaseOrderColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: true,
    type: 'number',
    width: 40
  },

  {
    key: 'Vendor',
    header: 'Vendor',
    visible: true,
    type: 'string',
    width: 150
  },
  {
    key: 'Status',
    header: 'Status',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'ExpectedDate',
    header: 'Expected date',
    visible: false,
    type: 'date',
    width: 40,
    format: 'yMd'
  },
  {
    key: 'OrderedDate',
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
    key: 'TotalCost',
    header: 'cost',
    visible: true,
    type: 'number',
    width: 50,
    format: '#'
  },
  {
    key: 'AdditionalFees',
    header: 'Additional Fee',
    visible: false,
    type: 'number',
    width: 30,
    format: '#'
  },
  {
    key: 'Discount',
    header: 'Discount',
    visible: false,
    type: 'number',
    width: 30,
    format: '#'
  },
  {
    key: 'OrderId',
    header: 'Order id',
    visible: false,
    type: 'string',
    width: 30
  },
  {
    key: 'InvoiceId',
    header: 'Invoice id',
    visible: false,
    type: 'string',
    width: 30
  },
  {
    key: 'InvoiceDate',
    header: 'Invoice Date',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  },
  {
    key: 'PaymentDate',
    header: 'Payment date',
    visible: false,
    type: 'date',
    width: 30,
    format: 'yMd'
  },
  {
    key: 'ArivalDate',
    header: 'Recieved on',
    visible: false,
    type: 'date',
    width: 30,
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
