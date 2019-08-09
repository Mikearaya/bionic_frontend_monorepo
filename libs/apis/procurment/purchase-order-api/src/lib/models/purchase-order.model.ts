import { PurchaseOrderItemModel } from './purchase-order-item.model';

export class PurchaseOrder {
  Id?: number;
  Status: string;
  VendorId: number;
  ArrivalDate: Date;
  ExpectedDate: Date | string;
  OrderedDate: Date | string | null;
  ShippedDate: Date | string | null;
  Tax: number | null;
  AdditionalFee: number | null;
  Discount: number | null;
  OrderId: string;
  PaymentDate: Date | string | null;
  InvoiceId: string;
  InvoiceDate: Date | string | null;
  PurchaseOrderItems: PurchaseOrderItemModel[];
}
