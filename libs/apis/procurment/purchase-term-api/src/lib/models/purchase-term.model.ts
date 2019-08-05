export interface PurchaseTerm {
  id: number | null;
  vendorId: number;
  itemId: number;
  vendorProductId: string;
  priority: number | null;
  leadtime: number | null;
  minimumQuantity: number | null;
  unitPrice: number;
}
