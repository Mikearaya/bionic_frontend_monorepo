export interface PurchaseTermView {
  Id: number;
  VendorId: number;
  ItemId: number;
  VendorProductId: string;
  Priority: number | null;
  Leadtime: number | null;
  MinimumQuantity: number | null;
  UnitPrice: number;
  Item: string;
  Vendor: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
