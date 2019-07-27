export interface FreightOrder {
  Id?: number;
  OperationId: number;
  VehicleId: number;
  TrailorId: number | null;
  CargoType: number;
  Weight: number;
  Distance: number;
  Price: number;
  DriverCost: number;
  ArrShipper: Date | string | null;
  LoadingCompleted: Date | string | null;
  ArrConsignee: Date | string | null;
  UnloadingCompleted: Date | string | null;
  Status: number | null;
  ShippedBy: string;
  ConsigneeBy: string;
  DriverId: number;
  DispatchCompletedOn: Date | string | null;
  FreightOrderNo: string;
  WayBillNo: string;
  DispatcherName: string;
}
