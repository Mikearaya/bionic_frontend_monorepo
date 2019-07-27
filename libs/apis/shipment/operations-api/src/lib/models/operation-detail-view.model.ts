import { FreightOrderSummaryModel } from '@bionic/apis/shipment/freight-order-api';

export class OperationsDetailViewModel {
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
  FreightOrders: FreightOrderSummaryModel[] = [];
  ExtraNote: string;
}
