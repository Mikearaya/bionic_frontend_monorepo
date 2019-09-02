export interface StockBatchListView {
  Id: number;
  ItemId: number;
  Quantity: number;
  TotalBooked: number;
  UnitCost: number;
  Status: string;
  StorageLocation: string;
  StorageLocationId: number;
  PurchaseOrderId: number | null;
  ManufactureOrderId: number | null;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  TotalCost: number;
  TotalWritenOff: number;
  AvailableFrom: Date | string;
  ExpiryDate: Date | string | null;
  Item: string;
  ItemGroup: string;
  ItemGroupId: number;
  Source: string;
}
