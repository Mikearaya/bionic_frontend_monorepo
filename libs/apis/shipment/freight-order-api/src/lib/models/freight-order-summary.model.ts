export interface FreightOrderSummaryModel {
  Id?: number;
  OperationId: number | null;
  VehiclePlate: string;
  TrailorPlate: string;
  CargoType: string;
  Status: string;
  FreightOrderNo: string;
}
