export interface OperationViewModel {
  Id: number;
  CustomerId: number;
  Customer: string;
  StratLocation: string;
  DestinationLocation: string;
  StratCountry: string;
  DestinationCountry: string;
  StartPoint: number;
  Destination: number;
  ScheduleDeparture: Date | string;
  ScheduledArrival: Date | string;
  DocumentsRecievedOn: Date | string | null;
  NumberOfFreightOrders: number;
  ExtraNote: string;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
