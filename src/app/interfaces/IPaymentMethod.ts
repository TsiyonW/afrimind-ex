export interface IPaymentMethod{
  PaymentMethodId: number;
  Name: string;
  Description: string;
  ImageURL: string;
  IsActive: boolean;
  StatusCode: number;
  StatusReason: string;
  Display: boolean;

}
