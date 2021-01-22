import { HotelsService } from './../hotels.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent implements OnInit {
  @Input() parentData: any;
  title = 'Hotel component';
  hotelId: any;
  hotelDetail: any;
  roomDetail: any;
  constructor(
    private hotelService: HotelsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // console.log(history.state.hotelId);
    this.hotelId = this.route.snapshot.paramMap.get('id');
    this.hotelService
      .getHotelById(this.hotelId)
      .subscribe((data) => (this.hotelDetail = data));
    this.hotelService
      .getRooms(this.hotelId)
      .subscribe((data) => (this.roomDetail = data));
  }
}
