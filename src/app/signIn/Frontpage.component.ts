import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomType } from '../model/RoomType';
import { LoginRepository } from '../model/DataRepository';
import { Rent } from '../model/Rent';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { RoomDetails } from '../model/RoomDetails';

@Component({
    selector: 'signIn',
    templateUrl: 'Frontpage.component.html',
    styleUrls: ['Frontpage.component.css']
})

export class FrontpageComponent  implements OnInit{
  currentDate = new Date();
  nextDate=new Date()
  fromDate?: string | null;
  toDate?:string|null;
  public roomStatus!:Map<string,Map<string,number>>
  availableRooms!:Map<String, RoomDetails[]>
    hideRoomType:boolean = true;
    rent:Rent=new Rent();
    Available:number=0
    Booked:number=0
    constructor(private router:Router,private repo:LoginRepository,private activateRoute:ActivatedRoute,private date:DatePipe) {

      this.fromDate = this.date.transform(this.currentDate, 'yyyy-MM-dd');
      this.nextDate.setDate(this.currentDate.getDate()+1)
      this.toDate=this.date.transform(this.nextDate,'yyyy-MM-dd')
      this.nextDate.setDate(this.currentDate.getDate()+1)
      this.getRoomsStatusOnDateChange()
      this.getAvailableRooms()
      console.log(this.availableRooms)
     }
  ngOnInit(): void {
    this.availableRooms=this.repo.getRooms()
  }


     getAvailableRooms()
   {
   this.availableRooms= this.repo.getAvailableRooms(1 ,JSON.stringify(this.fromDate),JSON.stringify(this.toDate));
    console.log(this.availableRooms)
    }
    get Rooms():Map<String, RoomDetails[]>
    {
      return this.repo.getRooms();
    }
   
     getRoomsStatusOnDateChange()
     {
       this.roomStatus=this.repo.getRoomsStatus(1 ,JSON.stringify(this.fromDate),JSON.stringify(this.toDate));
     }
     get statusCount():Map<string,Map<string,number>>{
        return  this.repo.getRoomStatusCount()
       }
   get RoomType():RoomType[]
   {
    return this.repo.getRoomType()
   }
    
   get Rent():Rent[]|undefined
   {
    return this.repo.getRents()
   }

   getValue(key:string):RoomDetails[]
   {
      return this.availableRooms.get(key)!
   }

   bookRoom() {
    
    //  console.log(this.availableRooms.get(roomType))
        this.hideRoomType = false;
        
   }
   showRoomType(){
    this.hideRoomType = true;
   }

    
    login()
    {
        this.router.navigateByUrl("/signin")
    }
    
}