import { CustomGridColumns } from '@bionic/components/data-grid';

export const customerInvoiceViewColumnsBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', type: 'number', visible: false, width: 30 },
  {
    key: 'CustomerName',
    header: 'Name',
    type: 'string',
    width: 100,
    visible: true
  },
  {
    key: 'PurchaseOrderId',
    header: 'Order Id',
    visible: true,
    width: 40,
    type: 'number'
  },
  {
    key: 'InvoiceType',
    header: 'Type',
    visible: false,
    type: 'string',
    width: 50
  },
  {
    key: 'Discount',
    header: 'Discount',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'PaymentMethod',
    header: 'Payment Method',
    visible: true,
    type: 'string',
    width: 50
  },
  { key: 'Status', header: 'Status', visible: true, type: 'string', width: 50 },
  {
    key: 'DateAdded',
    header: 'Added',
    type: 'date',
    visible: false,
    width: 30
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    type: 'date',
    visible: false,
    width: 30
  },
  {
    key: 'DueDate',
    header: 'Due Date',
    type: 'date',
    visible: false,
    width: 30
  }
];
