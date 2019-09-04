export interface WriteOffListModel {
  Id: number;
  ItemId: number;
  ItemGroupId: number;
  Item: string;
  Uom: string;
  ItemGroup: string;
  Status: string;
  Quantity: number;
  TotalCost: number;
  Note: string;
  Type: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
