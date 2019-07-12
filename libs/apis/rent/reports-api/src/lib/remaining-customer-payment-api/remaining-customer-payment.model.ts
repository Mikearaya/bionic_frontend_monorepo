export interface RemainingCustomerPayment {
  CustomerId: number;
  CustomerName: string;
  Amount: number | null;
  PaidAmount: number | null;
  RemainingPayment?: number;
}
