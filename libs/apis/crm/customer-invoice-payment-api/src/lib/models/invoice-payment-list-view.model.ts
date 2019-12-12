export interface InvoicePaymentListView {
  Id: number;
  InvoiceNo: number | null;
  CustomerName: string;
  Amount: number;
  PurchaseOrderId: number | null;
  CheckNo: string;
  Date: Date | string;
  Note: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
