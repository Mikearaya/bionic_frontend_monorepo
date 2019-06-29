export interface CustomerPaymentListView {
  Id: number;
  CustomerId: number | null;
  CustomerName: string;
  PaidAmount: number;
  Date: Date | string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
