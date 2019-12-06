import { CustomerOrderItemView } from './customer-order-item-view.model';

export interface CustomerOrderDetailView {
  Id: number;
  CustomerId: number;
  CustomerName: string;
  OrderStatus: string;
  DueDate: Date | string | null;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;

  CreatedBy: string;
  Reference: string;
  Description: string;
  Discount: number;
  CustomerOrderItem: CustomerOrderItemView[];
}
