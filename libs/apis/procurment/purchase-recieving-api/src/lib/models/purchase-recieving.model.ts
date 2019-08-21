export class PurchaseRecievingModel {
  PurchaseOrderId: number;
  PurchaseOrderItems: PurchaseRecievingItemModel[] = [];
}

export interface PurchaseRecievingItemModel {
  LotId: number;
  Quantity: number;
}
