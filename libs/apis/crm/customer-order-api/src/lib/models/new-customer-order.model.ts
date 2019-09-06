import { CustomerOrderItemModel } from './customer-order-item.model';

export interface NewCustomerOrderModel {
  Status: string;
  ClientId: number;
  Description: string;
  DeliveryDate: Date | string | null;
  CustomerOrderDetail: CustomerOrderItemModel[];
}
