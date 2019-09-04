export interface ShipmentViewDetail {
  Id?: number;
  BookedById: number;
  BookingUser: string;
  CustomerOrderId: number;
  CustomerOrderItemId: number;
  ItemId: number;
  ItemName: string;
  Status?: string;
  TotalShiped?: number;
  AvalableForShipment: number;
  RemainingShipment: number;
  OrderQuantity: number;
}
