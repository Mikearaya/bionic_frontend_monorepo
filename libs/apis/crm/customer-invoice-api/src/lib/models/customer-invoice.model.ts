import { CustomerInvoiceDetailItem } from './customer-invoice-detail.model';

export class CustomerInvoice {
  Id: number;
  CustomerName: string;
  PurchaseOrderId: number;
  PreparedBy: number;
  PrintCount: number | null;
  InvoiceType: string;
  PaymentMethod: string;
  Tax: number;
  Note: string;
  Discount: number;
  Status: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  DueDate: Date | string | null;
  InvoiceDetail: CustomerInvoiceDetailItem[] = [];
}
