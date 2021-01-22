import { HotelsService } from './../hotels.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss'],
})
export class HotelsComponent implements OnInit {
  hotelsDetail: any = [];
  constructor(private hotelService: HotelsService, private router: Router) {}

  ngOnInit(): void {
    // get hotels from the service
    this.hotelService
      .getHotels()
      .subscribe((data) => (this.hotelsDetail = data));
    console.log('hotels detail', this.hotelsDetail);
  }
  onSelect(hotel: any): void {
    // navigate to hotel with the hotel id
    this.router.navigate(['/hotel', hotel.HotelId], {
      state: { hotelId: hotel.HotelId },
    });
  }
}
