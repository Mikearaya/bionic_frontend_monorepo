export interface CustomerOrderItemView {
  Id: number;
  ItemId: number;
  Quantity: number;
  PricePerItem: number;
  SubTotal: number;
  TotalCost: number;
  Profit: number;
  Status: string;
  ManufactureOrderId: number;
  DueDate: Date | string | null;
  TotalShipped: number | null;
}
