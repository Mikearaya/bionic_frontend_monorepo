export interface ItemView {
  id: number;
  code: string;
  name: string;
  minimumQuantity: number | null;
  description: string;
  weight: number | null;
  unitCost: number;
  price: number | null;
  storingUoM: string;
  photo: string;
  isInventoryItem: number | null;
  isProcured: number | null;
  defaultStorageId: number;
  defaultStorage: string;
  primaryUomId: number;
  primaryUom: string;
  shelfLife: number | null;
  groupId: number;
  group: string;
  dateUpdated: Date | string | null;
  dateAdded: Date | string | null;
}
