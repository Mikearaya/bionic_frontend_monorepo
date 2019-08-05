export interface ItemModel {
  id: number;
  code: string;
  name: string;
  minimumQuantity: number;
  description: string;
  weight: number;
  unitCost: number;
  defaultStorageId: number;
  image: string;
  isInventoryItem: number;
  isProcured: number;
  primaryUomId: number;
  price: number | null;
  shelfLife: number | null;
  groupId: number;
}
