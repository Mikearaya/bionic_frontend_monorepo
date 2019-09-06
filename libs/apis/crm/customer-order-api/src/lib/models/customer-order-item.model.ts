export interface CustomerOrderItemModel {
  Id?: number | null;
  ItemId: number;
  Quantity: number;
  DueDate: Date | string;
  UnitPrice: number;
}
