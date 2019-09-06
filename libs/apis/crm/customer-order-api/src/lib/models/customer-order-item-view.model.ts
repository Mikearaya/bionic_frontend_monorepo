export interface CustomerOrderItemView {
  Id: number;
  ItemId: number;
  Quantity: number;
  UnitPrice: number;
  SubTotal: number;
  TotalCost: number;
  Profit: number;
  Status: string;
  ManufactureOrderId: number;
  DeliveryDate: Date | string | null;
  TotalShipped: number | null;
}
