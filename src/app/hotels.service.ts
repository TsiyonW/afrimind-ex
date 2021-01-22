import { IHotelDetail } from './interfaces/IHotelDetail';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IHotel } from './interfaces/IHotel';
import { IRoom } from './interfaces/IRoom';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root',
})
export class HotelsService {
  hotelUrlWithId: any;
  roomUrlWithId: any;
  // private hotelsUrl = 'http://traddis.com/api/hotels';
  // private hotelUrl = 'http://traddis.com/api/rooms?hotel_id=';
  // private roomsUrl = 'http://traddis.com/api/hotels/';
  private hotelsUrl = '../assets/hotels.data.json';
  private hotelUrl = '../assets/hotel.data.json';
  private roomsUrl = '../assets/room.data.json';

  constructor(private http: HttpClient) {}

  // Get hotels from the api
  getHotels(): Observable<IHotel[]> {
    return this.http.get<IHotel[]>(this.hotelsUrl);
  }

  // Get hotel detail by id from the api
  getHotelById(hotelId: number): Observable<IHotelDetail[]> {
    this.hotelUrlWithId = this.hotelUrl + hotelId;
    // return this.http.get<IHotelDetail[]>(this.hotelUrlWithId);
    return this.http.get<IHotelDetail[]>(this.hotelUrl);

  }

  // Get rooms using hotel id
  getRooms(hotelId: number): Observable<IRoom[]> {
    this.roomUrlWithId = this.roomsUrl + hotelId;
    // return this.http.get<IHotelDetail[]>(this.hotelUrlWithId);

    return this.http.get<IRoom[]>(this.roomsUrl);
  }
}
