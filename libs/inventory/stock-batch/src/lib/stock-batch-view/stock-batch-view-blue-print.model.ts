import { CustomGridColumns } from '@bionic/components/data-grid';

export const stockBatchColumnBluePrint: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', visible: true, type: 'number', width: 20 },
  {
    key: 'ItemId',
    header: 'Item Id',
    visible: false,
    type: 'number',
    width: 20
  },
  {
    key: 'ItemId',
    header: 'Item Id',
    visible: false,
    type: 'number',
    width: 20
  },
  { key: 'Item', header: 'Item', visible: true, type: 'string', width: 70 },
  {
    key: 'ItemGroup',
    header: 'Item Group',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'Quantity',
    header: 'Quantity',
    visible: true,
    type: 'number',
    width: 35
  },
  {
    key: 'TotalBooked',
    header: 'Booked',
    visible: true,
    type: 'number',
    width: 35
  },
  {
    key: 'UnitCost',
    header: 'unit Cost',
    visible: true,
    type: 'number',
    width: 35,
    format: '##'
  },
  {
    key: 'TotalCost',
    header: 'Total Cost',
    visible: true,
    type: 'number',
    width: 35,
    format: '##'
  },
  { key: 'Status', header: 'Status', visible: true, type: 'string', width: 35 },
  {
    key: 'StorageLocation',
    header: 'Storage',
    visible: true,
    type: 'string',
    width: 35
  },
  { key: 'Source', header: 'Source', visible: true, type: 'string', width: 50 },
  {
    key: 'StorageLocationId',
    header: 'Storage Id',
    visible: false,
    type: 'number',
    width: 35
  },
  {
    key: 'ItemGroupId',
    header: 'Item Group Id',
    visible: false,
    type: 'number',
    width: 35
  },
  {
    key: 'PurchaseOrderId',
    header: 'PO Id',
    visible: false,
    type: 'number',
    width: 35
  },
  {
    key: 'ManufactureOrderId',
    header: 'MO Id',
    visible: false,
    type: 'number',
    width: 35
  },
  {
    key: 'AvailableFrom',
    header: 'Available From',
    visible: true,
    type: 'date',
    width: 35,
    format: 'yMd'
  },
  {
    key: 'ExpiryDate',
    header: 'Expiry Date',
    visible: false,
    type: 'date',
    width: 35,
    format: 'yMd'
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'date',
    width: 35,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    width: 35,
    format: 'yMd'
  }
];
