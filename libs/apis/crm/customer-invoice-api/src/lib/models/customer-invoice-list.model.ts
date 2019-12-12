export interface CustomerInvoiceList {
  Id: number;
  CustomerName: string;
  PurchaseOrderId: number;
  InvoiceType: string;
  PaymentMethod: string;
  Tax: number;
  Note: string;
  Discount: number;
  Status: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  DueDate: Date | string | null;
}
