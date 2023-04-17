import { Component, OnInit } from '@angular/core';
import { RoomType } from '../model/RoomType';

import { LoginRepository } from '../model/DataRepository';
import { ActivatedRoute } from '@angular/router';
import { Rent } from '../model/Rent';


interface Room {
    type: string;
    number: string;
    checkInDate: string;
    checkOutDate: string;
    booked: boolean;
  }
@Component({
    selector: 'rooms',
    templateUrl: 'Rooms.component.html'
})

export class RoomsComponent  {
  roomType:RoomType=new RoomType();
  rents:Rent=new Rent();
  selectedRoomType:RoomType[]=[]

    constructor(private repo:LoginRepository,private activeRoute:ActivatedRoute) {

      Object.assign(this.roomType, repo.getRoomTypeOne(this.activeRoute.snapshot.params["roomTypeId"]));
     // console.log(this.activeRoute.snapshot.params["roomTypeId"])
     // console.log(Object.assign(this.roomType, repo.getRoomTypeOne(this.activeRoute.snapshot.params["roomTypeId"])))
      Object.assign(this.rents,repo. getRoomRentOne(this.activeRoute.snapshot.params["rentId"]));
      console.log(this.activeRoute.snapshot.params["rentId"])




      this.activeRoute.params.subscribe(params => {
        // Retrieve the "roomTypeId" and "rentId" parameters from the route params
        const roomTypeId = +params['roomTypeId'];
        const rentId = +params['rentId'];
    
        // Fetch RoomType and Rent objects based on the retrieved parameters
        Object.assign(this.roomType, this.repo.getRoomTypeOne(roomTypeId));
        Object.assign(this.rents, this.repo.getRoomRentOne(rentId));
    
        // Use the fetched objects as needed
        console.log("Room Type: ", this.roomType);
        console.log("Rent: ", this.rents);
      });

    }

     
    get RoomType():RoomType[]
    {
     return this.repo.getRoomType()
    }

    get Rents():Rent[]{
      return this.repo.getRents()
    }
    

  // Fetch room numbers from server and populate the roomNos array
  // this.roomService.getRoomNumbers().subscribe(
  //   data => {
  //     this.roomNos = data; // Assuming data is an array of room numbers received from server
  //   },
  //   error => {
  //     console.error('Failed to fetch room numbers from server:', error);
  //   }
  // );
}

/* [(ngModel)]="selectedRoomNo" in html */