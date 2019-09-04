export interface CriticalItemModel {
  Id: number;
  ItemName: string;
  ItemCode: string;
  Required: number;
  MinimumQuantity: number;
  AvailableQuantity: number;
  ExpectedAvailableQuantity: number;
  Uom: string;
  InStock: number;
}
