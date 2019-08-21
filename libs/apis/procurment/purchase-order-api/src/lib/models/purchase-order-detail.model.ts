export class PurchaseOrderDetailView {
  Id: number;
  VendorId: number;
  Vendor: string;
  Status: string;
  ExpectedDate: Date | string;
  OrderedDate: Date | string | null;
  ShippedDate: Date | string | null;
  Tax: number | null;
  TotalCost: number;
  AdditionalFee: number | null;
  Discount: number | null;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  OrderId: string;
  PaymentDate: Date | string | null;
  InvoiceId: string;
  InvoiceDate: Date | string | null;

  PurchaseOrderItems: PurchaseOrderItemView[] = [];
}

export interface PurchaseOrderItemView {
  LotId: number;
  PurchaseOrderId: number;
  ItemId: number;
  Status: string;
  Item: string;
  ItemGroupId: number;
  ItemGroup: string;
  Quantity: number;
  SubTotal: number;
  UnitPrice: number;
  ExpectedDate: Date | string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
