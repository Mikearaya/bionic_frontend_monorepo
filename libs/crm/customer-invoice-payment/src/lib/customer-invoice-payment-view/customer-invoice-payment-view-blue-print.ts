import { CustomGridColumns } from '@bionic/components/data-grid';

/*
 * @CreateTime: Sep 12, 2018 12:48 AM
 * @Author:  Mikael Araya
 * @Contact: MikaelAraya12@gmail.com
 * @Last Modified By:  Mikael Araya
 * @Last Modified Time: Oct 13, 2018 9:32 PM
 * @Description: Modify Here, Please
 */

export const customerInvoicePaymentColumns: CustomGridColumns[] = [
  { key: 'Id', header: 'ID', type: 'number', width: 20 },
  { key: 'CustomerName', header: 'Customer', type: 'string', width: 35 },
  {
    key: 'InvoiceId',
    header: 'Invoice',
    type: 'number',
    width: 40,
    visible: false
  },
  {
    key: 'Amount',
    header: 'Amount',
    type: 'number',
    width: 40,
    format: 'C2',
    visible: true
  },
  { key: 'Date', header: 'Date', type: 'date', format: 'yMd', width: 30 },
  { key: 'CheckNo', header: 'CheckNo', type: 'string', width: 28 },
  { key: 'Note', header: 'Note', type: 'string', width: 50, visible: false },

  {
    key: 'DateAdded',
    header: 'Created',
    format: 'yMd',
    type: 'date',
    width: 30,
    visible: false
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    type: 'date',
    width: 30,
    visible: false
  }
];
