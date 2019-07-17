export interface OperationModel {
  Id?: number;
  CustomerId: number;
  DriverId: number;
  VehicleId: number;
  TrailorId?: number;
  StartPoint: number;
  Destination: number;
  ScheduledDeparture: Date;
  ScheduledArrival: Date;
  DepartureDate?: Date;
  ArrivalDate?: Date;
  DocumentsRecievedOn?: Date;
  CargoWeight: number;
  Distance: number;
  Price: number;
  DriverCost: number;
  LoadedBy?: number;
  LoaderPaidBy?: number;
  TransitNumber?: string;
  WayBillNumber?: string;
  CargoType?: number;
  ExtraNote?: string;
}
