export interface ItemModel {
  Id: number;
  Code: string;
  Name: string;
  MinimumQuantity: number;
  Description?: string;
  Weight: number;
  UnitCost: number;
  DefaultStorageId: number;
  Image: string;
  IsInventoryItem: number;
  IsProcured: number;
  PrimaryUomId: number;
  Price: number | null;
  ShelfLife: number | null;
  GroupId: number;
}
