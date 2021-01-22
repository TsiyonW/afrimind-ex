import { IPaymentMethod } from './IPaymentMethod';

export interface IHotelDetail{
  HotelId: number;
  HotelName: string;
  ExternalDisplay: string;
  HotelTypeId: number;
  Phone: string;
  Latitude: string;
  Longitude: string;
  StreetAddress1: string;
  StreetAddress2: string;
  City: string;
  PostalCode: string;
  Country: string;
  StarLevel: number;
  PriceMin: number;
  PriceMax: string;
  Currency: string;
  PricingDisplay: string;
  SoldOutTo: string;
  SoldOutDateFrom: string;
  SoldOutDateTo: string;
  SoldOutModifiedBy: string;
  WebSite: string;
  LocationList: [string];
  DisplayOrder: number;
  Description: string;
  ApplyTax: boolean;
  Amenities: string;
  LocationId: number;
  AccountId: string;
  IsActive: boolean;
  DateCreated: string;
  DateModified: string;
  DefaultPicture: string;
  PaymentMethods: [IPaymentMethod];
}
