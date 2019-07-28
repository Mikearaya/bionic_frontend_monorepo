export interface FreightOrderPaymentRequestView {
  Id: number;
  FreightOrderId: number;
  Customer: string;
  RequestedDate: Date | string;
  ScheduledDate: Date | string;
  Status: string;

}
