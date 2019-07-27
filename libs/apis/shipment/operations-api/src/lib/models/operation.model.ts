export interface OperationModel {
  Id?: number;
  CustomerId: number;
  StartPoint: number;
  Destination: number;
  ScheduleDeparture: Date | string;
  ScheduledArrival: Date | string;
  DocumentsRecievedOn: Date | string | null;
  ExtraNote: string;
}
