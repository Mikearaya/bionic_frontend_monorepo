import { StockBatchStorageModel } from './stock-batch-storage.model';

export interface NewStockBatchModel {
  ItemId: number;
  Quantity: number;
  UnitCost: number;
  PurchaseOrderId?: number | null;
  Status: string;
  ManufactureOrderId?: number | null;
  AvailableFrom: Date | string;
  ExpiryDate: Date | string | null;
  StorageLocation: StockBatchStorageModel[];
}
