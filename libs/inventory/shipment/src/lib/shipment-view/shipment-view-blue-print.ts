import { CustomGridColumns } from '@bionic/components/data-grid';

export const shipmentBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    type: 'number',
    width: 15,
    visible: true
  },
  {
    key: 'CustomerOrderId',
    header: 'Customer Order',
    type: 'number',
    width: 28,
    visible: true
  },
  {
    key: 'BookingUser',
    header: 'Sales Person',
    type: 'string',
    width: 28,
    visible: true
  },
  {
    key: 'DeliveryDate',
    header: 'Delivery Date',
    type: 'date',
    width: 28,
    format: 'yMd',
    visible: true
  },
  {
    key: 'Status',
    header: 'Status',
    type: 'string',
    width: 28,
    format: '',
    visible: true
  },
  {
    key: 'DateAdded',
    header: 'Date Added',
    type: 'date',
    width: 28,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    type: 'date',
    width: 28,
    format: 'yMd',
    visible: false
  }
];

// used for detail view component grid column mapping
export const shipmentDetailBluePrint: CustomGridColumns[] = [
  {
    key: 'CustomerOrderItemId',
    header: 'Order Item',
    type: 'number',
    width: 15,
    visible: false
  },
  {
    key: 'ItemName',
    header: 'Item Name',
    type: 'string',
    width: 28,
    visible: true
  },
  {
    key: 'BookedQuantity',
    header: 'Booked Quantity',
    type: 'number',
    width: 28,
    visible: true
  },
  {
    key: 'PickedQuantity',
    header: 'Picked Quantity',
    type: 'number',
    width: 28,
    visible: true
  },
  {
    key: 'RemainingShipments',
    header: 'Remaining',
    type: 'number',

    width: 28,
    visible: true
  },
  {
    key: 'Status',
    header: 'Status',
    type: 'string',
    width: 28,
    visible: true
  }
];
