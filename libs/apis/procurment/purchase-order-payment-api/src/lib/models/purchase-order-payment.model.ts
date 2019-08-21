export interface PurchaseOrderPayment {
  Id?: number;
  Amount: number;
  PurchaseOrderId: number | null;
  CheckNo: number | null;
  Date: Date | string;
  Note: string;
}
