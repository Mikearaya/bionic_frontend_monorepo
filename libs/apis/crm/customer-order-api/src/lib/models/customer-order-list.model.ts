export interface CustomerOrderListView {
  Id: number;
  TotalQuantity: number;
  CustomerId: number;
  CustomerName: string;
  TotalPrice: number | null;
  TotalCost: number | null;
  Profit: number;
  Status: string;
  ProductStatus: string;
  InvoiceStatus: string;
  PaymentStatus: string;
  totalShipped: number | null;
  CreatedBy: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  DeliveryDate: Date | string | null;
}
