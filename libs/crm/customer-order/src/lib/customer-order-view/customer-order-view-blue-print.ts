import { CustomGridColumns } from '@bionic/components/data-grid';

/*
 * @CreateTime: Sep 12, 2018 12:48 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Oct 13, 2018 9:32 PM
 * @Description: Modify Here, Please
 */

export const customerOrderBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    type: 'number',
    width: 20
  },
  {
    key: 'CustomerName',
    header: 'Customer',
    type: 'string',
    width: 35
  },
  {
    key: 'CreatedBy',
    header: 'Ordered By',
    type: 'string',
    width: 40,
    visible: false
  },

  {
    key: 'Description',
    header: 'Description',
    type: 'string',
    width: 40,
    visible: false
  },
  {
    key: 'Status',
    header: 'Status',
    type: 'string',
    width: 30
  },
  {
    key: 'InvoiceStatus',
    header: 'Invoice Status',
    type: 'string',
    width: 28
  },
  {
    key: 'PaymentStatus',
    header: 'Payment Status',
    type: 'string',
    width: 28
  },
  {
    key: 'TotalCost',
    header: 'Cost',
    type: 'number',
    format: 'C2',
    width: 25
  },
  {
    key: 'TotalPrice',
    header: 'Price',
    type: 'number',
    format: 'C2',
    width: 25
  },
  {
    key: 'Profit',
    header: 'Profit',
    type: 'number',
    width: 30,
    visible: true
  },

  {
    key: 'DateAdded',
    header: 'Created',
    format: 'yMd',
    type: 'date',
    width: 30
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    type: 'date',
    width: 30,
    visible: false
  }
];
