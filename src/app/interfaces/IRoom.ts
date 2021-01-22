export interface IRoom {
  RoomTypeId: number;
  Name: string;
  HotelId: number;
  ExternalDisplay: string;
  PricingStructureDefaultId: string;
  RoomCount: number;
  BookableCount: string;
  Beds: number;
  MaxAdult: number;
  MaxChild: string;
  IsSmoking: string;
  HasInternet: string;
  DefaultPicture: string;
  Amenities: string;
  RoomDescription: string;
  IsActive: boolean;
  Price: number;
}
