import { CustomGridColumns } from '@bionic/components/data-grid';

export const inventoryColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'ItemId',
    header: 'ID',
    visible: false,
    type: 'number',
    width: 20
  },
  {
    key: 'ItemCode',
    header: 'Item Code',
    visible: true,
    type: 'string',
    width: 70
  },
  {
    key: 'Item',
    header: 'Item',
    visible: true,
    type: 'string'
  },
  {
    key: 'ItemGroup',
    header: 'Item Group',
    visible: true,
    type: 'string',
    width: 100
  },
  {
    key: 'AverageUnitCost',
    header: 'Avg Cost',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'TotalCost',
    header: 'Cost',
    visible: true,
    type: 'number',
    width: 50
  },
  {
    key: 'DateAdded',
    header: 'Created',
    visible: false,
    type: 'date',
    width: 50,
    format: 'yMd'
  },
  {
    key: 'DateUpdated',
    header: 'Last Updated',
    visible: false,
    type: 'date',
    width: 50,
    format: 'yMd'
  }
];
