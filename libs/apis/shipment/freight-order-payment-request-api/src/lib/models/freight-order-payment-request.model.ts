export interface FreightOrderPaymentRequest {
  Id?: number;
  FreightOrderId: number;
  RequestedDate: Date | string;
  ScheduledDate: Date | string;
}
