export interface CriticalItemModel {
  id: number;
  itemName: string;
  itemCode: string;
  required: number;
  minimumQuantity: number;
  availableQuantity: number;
  expectedAvailableQuantity: number;
  uom: string;
  inStock: number;
}
