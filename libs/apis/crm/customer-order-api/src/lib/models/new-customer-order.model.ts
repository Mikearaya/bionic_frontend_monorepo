import { CustomerOrderItemModel } from './customer-order-item.model';

export interface NewCustomerOrderModel {
  OrderStatus: string;
  ClientId: number;
  Description: string;
  DueDate: Date | string | null;
  CustomerOrderItem: CustomerOrderItemModel[];
}
