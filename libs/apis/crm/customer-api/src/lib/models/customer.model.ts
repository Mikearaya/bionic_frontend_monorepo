import { CustomerTelephoneAddress } from './customer-telephone.model';
import { CustomerSocialMediaAddress } from './customer-social-media.model';
import { CustomerAddress } from './customer-address.model';

export interface Customer {
  Id?: number;
  FullName: string;
  CreditLimit?: number;
  PaymentPeriod?: number;
  Tin?: string;
  Type: string;
  Fax?: string;
  PoBox?: string;
  Email: string;
  PhoneNumber: CustomerTelephoneAddress[];
  SocialMedia: CustomerSocialMediaAddress[];
  Address: CustomerAddress[];
}
