export interface PurchaseTerm {
  Id: number | null;
  VendorId: number;
  ItemId: number;
  VendorProductId: string;
  Priority: number | null;
  Leadtime: number | null;
  MinimumQuantity: number | null;
  UnitPrice: number;
}
