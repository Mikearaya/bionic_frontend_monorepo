export class PurchaseOrderDetailView {
  id: number;
  vendorId: number;
  vendor: string;
  status: string;
  expectedDate: Date | string;
  orderedDate: Date | string | null;
  shippedDate: Date | string | null;
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

  OrderItems: PurchaseOrderItemView[];
}

export interface PurchaseOrderItemView {
  lotId: number;
  purchaseOrderId: number;
  itemId: number;
  status: string;
  item: string;
  itemGroupId: number;
  itemGroup: string;
  quantity: number;
  subTotal: number;
  unitPrice: number;
  expectedDate: Date | string;
  dateAdded: Date | string | null;
  dateUpdated: Date | string | null;
}
