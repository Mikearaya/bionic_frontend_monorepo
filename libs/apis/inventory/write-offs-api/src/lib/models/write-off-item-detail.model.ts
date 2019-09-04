export interface WriteOffItemDetailModel {
  Id: number;
  BatchStorageId: number;
  BatchId: number;
  Storage: string;
  StorageId: number;
  Item: string;
  Uom: string;
  BatchStatus: string;
  TotalBooked: number;
  ItemId: number;
  WriteOffId: number;
  TotalCost: number;
  UnitCost: number;
  BatchQuantity: number;
  Quantity: number;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
