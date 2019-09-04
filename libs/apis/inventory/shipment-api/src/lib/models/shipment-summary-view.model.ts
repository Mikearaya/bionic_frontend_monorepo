export interface ShipmentSummaryView {
  Id: number;
  CustomerOrderId: number;
  CustomerName: string;
  PlanedShipment: number;
  ActualShiped: number;
  RemaingShipment: number;
  Status: string;
  DeliveryDate: Date;
  CreatedOn: Date;
  Dateupdated: Date;
  BookedById: number;
  BookerName: string;
}
