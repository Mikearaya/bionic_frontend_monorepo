import { StockBatchStorageView } from './stock-batch-storage-view.model';

export interface StockBatchDetailView {
  Id: number;
  ItemId: number;
  Quantity: number;
  TotalBooked: number | null;
  UnitCost: number;
  Status: string;
  PurchaseOrderId: number | null;
  ManufactureOrderId: number | null;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  AvailableFrom: Date | string;
  ExpiryDate: Date | string | null;
  Item: string;
  ItemGroup: string;
  ItemGroupId: number;
  Source: string;

  Storages: StockBatchStorageView[];
}
