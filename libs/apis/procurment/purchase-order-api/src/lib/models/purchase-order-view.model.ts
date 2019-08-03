export interface PurchaseOrderView {
  id: number;
  vendorId: number;
  vendor: string;
  status: string;
  expectedDate: Date | string;
  orderedDate: Date | string | null;
  shippedDate: Date | string | null;
  arivalDate: Date | string | null;
  tax: number | null;
  totalCost: number;
  additionalFee: number | null;
  discount: number | null;
  dateAdded: Date | string | null;
  dateUpdated: Date | string | null;
  orderId: string;
  paymentDate: Date | string | null;
  invoiceId: string;
  invoiceDate: Date | string | null;
}
