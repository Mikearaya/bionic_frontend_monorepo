export interface InventoryViewModel {
  ItemId: number;
  ItemCode: string;
  Item: string;
  ItemGroupId: number;
  ItemGroup: string;
  Quantity: number;
  NewQuantity: number;
  TotalCost: number;
  AverageUnitCost: number;
  Uom: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
