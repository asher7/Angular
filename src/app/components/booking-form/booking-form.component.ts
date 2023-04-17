import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/model/Booking';
import { Customer } from 'src/app/model/Customer';
import { LoginRepository } from 'src/app/model/DataRepository';
import { Rent } from 'src/app/model/Rent';
import { RoomType } from 'src/app/model/RoomType';
import { NgForm ,FormGroup} from '@angular/forms';
import { RoomDetails } from 'src/app/model/RoomDetails';
@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.css']
})
export class BookingFormComponent implements OnInit {

  booking: Booking = {
   
    roomDetails:{
      roomNo:101,
      rent:{
        roomRent:1000,
        roomType:{
          roomType:'single Ac'
        }
      }
    },
    customer: {
      customerName: 'raj',
      customerGender: 'male',
      customerCountry:'india',
      
      customerPhoneNo:12345,
      customerLocality:'jpt',
      customerState:'TS',
      customerAadharNo:23984729364,
      totalMembers:4,
      purpose:"vacation"

    }
  };
  // rents:Rent={
  //   roomType:{
  //     roomType:""
  //   }
  // }
  myForm!: FormGroup;
roomDetails:RoomDetails= new RoomDetails();
  customer:Customer=new Customer();
  //booking:Booking=new Booking();
  roomType:RoomType=new RoomType();
  rents:Rent=new Rent();
  selectedRoomType:RoomType[]=[]
  @Output("showRoomType") showRoomType: EventEmitter<any> = new EventEmitter();

  
  constructor(private repo:LoginRepository,private activeRoute:ActivatedRoute,private route:Router) {
    // Object.assign(this.rents,repo. getRoomRentOne(this.activeRoute.snapshot.params["rentId"]));
    // Object.assign(this.roomType, repo.getRoomTypeOne(this.activeRoute.snapshot.params["roomTypeId"]));
    Object.assign(this.rents,repo. getRoomRentOne(this.repo.rentId));
    Object.assign(this.roomType, repo.getRoomTypeOne(this.repo.RoomTypeId));
    console.log(this.rents)
   }

  ngOnInit(): void {
  }
 
  get RoomType():RoomType[]
  {
   return this.repo.getRoomType()
  }

  get Rents():Rent[]{
    return this.repo.getRents()
  }
  goBack(form: NgForm){
    const formData = form.value;
    
   // this.showRoomType.emit();
    console.log(formData);
  }

  submitDetails(form: NgForm)
  {
    console.warn('this is opening ')
    this.repo.sendDetailsForm(this.booking)
    const formData = form.value;
    console.log("formData");
    this.showRoomType.emit();
  }
}
