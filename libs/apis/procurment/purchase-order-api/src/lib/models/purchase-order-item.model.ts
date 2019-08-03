export interface PurchaseOrderItemModel {
  Id: number | null;
  ItemId: number;
  Quantity: number;
  UnitPrice: number;
  ExpectedDate: Date | string | null;
}
