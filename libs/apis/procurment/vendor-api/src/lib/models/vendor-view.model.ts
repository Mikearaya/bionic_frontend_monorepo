export interface VendorViewModel {
  Id: number;
  Name: string;
  PhoneNumber: string;
  TinNumber: string;
  LeadTime: number | null;
  PaymentPeriod: number | null;
  DateAdded: Date | string | null;
  DateUpdated: Date | string | null;
}
