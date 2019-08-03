export interface VendorViewModel {
  id: number;
  name: string;
  phoneNumber: string;
  tinNumber: string;
  leadTime: number | null;
  paymentPeriod: number | null;
  dateAdded: Date | string | null;
  dateUpdated: Date | string | null;
}
