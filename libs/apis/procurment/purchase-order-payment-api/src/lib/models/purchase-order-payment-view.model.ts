export interface PurchaseOrderPaymentView {
  Id: number;
  Amount: number;
  PurchaseOrderId: number | null;
  Vendor: string;
  CheckNo: number | null;
  Date: Date | string;
  Note: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
  PrintCount: number | null;
}
