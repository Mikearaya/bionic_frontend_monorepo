export class PurchaseRecievingModel {
  PurchaseOrderId: number;
  RecievedItems: PurchaseRecievingItemModel[] = [];
}

export interface PurchaseRecievingItemModel {
  LotId: number;
  Quantity: number;
}
