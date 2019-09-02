export interface StockBatchStorageView {
  Id: number;
  BatchId: number;
  StorageId: number;
  Storage: string;
  PreviousStorageId: number | null;
  PreviousStorage: string;
  Quantity: number;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
