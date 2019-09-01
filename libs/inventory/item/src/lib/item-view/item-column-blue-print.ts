import { CustomGridColumns } from '@bionic/components/data-grid';

export const stockViewColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: false,
    type: 'number',
    width: 20
  },
  {
    key: 'ItemCode',
    header: 'Code',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'Item',
    header: 'Name',
    visible: true,
    type: 'string'
  },
  {
    key: 'InStock',
    header: 'In Stock',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'Available',
    header: 'Available',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'Booked',
    header: 'Booked',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'TotalExpected',
    header: 'Total Expected',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'ExpectedAvailable',
    header: 'Expected Available',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'ExpectedBooked',
    header: 'Expected Booked',
    visible: true,
    type: 'number',
    width: 40
  },
  {
    key: 'AverageCost',
    header: 'Avg. Cost',
    visible: false,
    type: 'number',
    width: 30,
    format: 'C2'
  },
  {
    key: 'TotalCost',
    header: 'Total Cost',
    visible: false,
    type: 'number',
    width: 30,
    format: 'C2'
  },
  {
    key: 'MinimumQuantity',
    header: 'Min. Qty',
    visible: false,
    type: 'number',
    width: 30,
    format: '#.##'
  },
  {
    key: 'PrimaryUomId',
    header: 'Primary UOM Id',
    visible: false,
    type: 'number',
    width: 20,
    format: '###'
  }
];
