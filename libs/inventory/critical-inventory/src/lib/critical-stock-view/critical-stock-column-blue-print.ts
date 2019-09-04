import { CustomGridColumns } from '@bionic/components/data-grid';

export const criticalStockViewBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    textAlign: 'left',
    visible: false,
    type: 'number',
    width: 20,
    format: ''
  },
  {
    key: 'ItemCode',
    header: 'Code',
    textAlign: 'left',
    visible: true,
    type: 'string',
    width: 50,
    format: ''
  },
  {
    key: 'ItemName',
    header: 'Item',
    textAlign: 'left',
    visible: true,
    type: 'string',
    format: ''
  },
  {
    key: 'InStock',
    header: 'In Stock',
    textAlign: 'left',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'AvailableQuantity',
    header: 'Available',
    textAlign: 'left',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'ExpectedAvailableQuantity',
    header: 'Expected Available',
    textAlign: 'left',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'MinimumQuantity',
    header: 'Min. Quantity',
    textAlign: 'left',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'Required',
    header: 'Required',
    textAlign: 'left',
    visible: true,
    type: 'number',
    width: 50
  }
];
