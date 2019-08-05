import { CustomGridColumns } from '@bionic/components/data-grid';

export const vendorColumnBluePrint: CustomGridColumns[] = [
  {
    key: 'Id',
    header: 'ID',
    visible: false,
    type: 'number',
    width: 20
  },
  {
    key: 'Name',
    header: 'Vendor Name',
    visible: true,
    type: 'string'
  },
  {
    key: 'TinNumber',
    header: 'TIN',
    visible: false,
    type: 'string',
    width: 50
  },
  {
    key: 'PhoneNumber',
    header: 'Phone',
    visible: true,
    type: 'string',
    width: 50
  },
  {
    key: 'LeadTime',
    header: 'Lead Time',
    visible: false,
    type: 'number',
    format: '##',
    width: 40
  },
  {
    key: 'PaymentPeriod',
    header: 'Payment Period',
    visible: false,
    type: 'number',
    format: '##',
    width: 40
  },
  {
    key: 'DateAdded',
    header: 'Added',
    visible: false,
    type: 'date',
    format: 'dYm',
    width: 35
  },
  {
    key: 'DateUpdated',
    header: 'Updated',
    visible: false,
    type: 'date',
    format: 'dYm',
    width: 35
  }
];
