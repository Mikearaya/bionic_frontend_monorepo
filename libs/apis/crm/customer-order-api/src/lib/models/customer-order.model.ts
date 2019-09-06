import { CustomerOrderDetail } from './customer-order-detail.model';

export interface CustomerOrder {
  Id?: number;
  ClientId: number;
  CreatedBy: number;
  DateAdded?: Date;
  DateUpdated?: Date;
  Description: string;
  InitialPayment: number;
  PaymentMethod: string;
  PurchaseOrderDetail: CustomerOrderDetail[];
}
