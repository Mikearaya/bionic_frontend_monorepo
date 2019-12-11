export interface CustomerInvoiceDetailItem {
  Id: number;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  Discount: number | null;
  SalesOrderId: number;
  ItemId: number;
  Item: string;
  InvoiceNo: number;
  Quantity: number;
  Note: string;
  UnitPrice: number;
  Tax: number | null;
}
