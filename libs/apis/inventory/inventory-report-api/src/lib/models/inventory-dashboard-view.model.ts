export interface InventoryDashboardView {
  TotalItems: number;
  TotalPlannedItems: number;
  TotalBookedShippings: number;
  TotalPickedShippings: number | null;
  TotalWriteOffItems: number;
  TotalRecievedItems: number;
}
