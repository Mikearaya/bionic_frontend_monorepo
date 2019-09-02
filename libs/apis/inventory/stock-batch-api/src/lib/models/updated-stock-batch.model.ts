export interface UpdatedStockBatchModel {
  Id: number;
  Status: string;
  AvailableFrom: Date | string;
  ExpiryDate: Date | string | null;
}
