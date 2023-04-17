import { Injectable } from "@angular/core";
import { RestDataSource } from "./RestDataLogin";
import { Login } from "./login";
import { Router } from "@angular/router";
import { Branch } from "./Branch";
import { Rent } from "./Rent";
import { RoomType } from "./RoomType";
import { RoomDetails } from "./RoomDetails";
import { Customer } from "./Customer";
import { Booking } from "./Booking";

@Injectable()
export class LoginRepository{
login:Login[]=[]
roomType:RoomType[]=[]
rents:Rent[]=[]
rentId:any=0
RoomTypeId:any=0
rentByRoomType:Rent[]=[]
booking:Booking[]=[]
availableRooms!:Map<String, RoomDetails[]>

public roomStatus!:Map<string,Map<string,number>>
    constructor(private dataSource: RestDataSource, private router:Router){
      this.dataSource.getRoomType().subscribe(p => this.roomType = p) 
      this.dataSource.getDetails().subscribe(e=> this.login=e)  
      this.dataSource.getRent().subscribe(rent=>this.rents=rent)   

    }
    getRoomsStatus(branchId:number,checkIn:string,checkOut:string):Map<string,Map<string,number>>{
      this.dataSource.getRoomsStatus(branchId,checkIn,checkOut).subscribe(data=>{
        this.roomStatus=data
        console.log(this.roomStatus)
      })
      console.log(this.roomStatus)
      return this.roomStatus
  }
  getRoomStatusCount():Map<string,Map<string,number>>{
    console.log(this.roomStatus)
    return this.roomStatus
  }

  getAvailableRooms(branchId:number,checkIn:string,checkOut:string):Map<String, RoomDetails[]>
{
  this.dataSource.getAvailableRooms(branchId,checkIn,checkOut).subscribe(

    value=>{this.availableRooms=value})
  return this.availableRooms;
}

getRooms():Map<String, RoomDetails[]>
{
  return this.availableRooms
}
    sendDetails(rentId:number |undefined,roomtypeId:number | undefined){
      console.log("send")
      this.RoomTypeId=roomtypeId;
      this.rentId=rentId 
    
}

sendDetailsForm(booking:Booking)
{
  this.dataSource.sendDetails(booking).subscribe(
    e=>this.booking.push(e)
    );
   console.log(booking);
   
}
    getRoomTypeOne(roomTypeId:number)
    {
      console.log(roomTypeId)
        return this.roomType.find(e=>e.roomTypeId==roomTypeId)
        
    }
    getRoomRentOne(rentId:number)
    {
      console.log(rentId)
        return this.rents.find(e=>e.rentId==rentId)
        
    }

   getRoomType():RoomType[]
   {
      return this.roomType
   }
   
   getRents():Rent[]
   {
      return this.rents
   }
  




// verify(username: any, password: any)
// { 
//   this.dataSource.verify(username,password).subscribe(e=>this.rent=e );
//   this.router.navigateByUrl("/main");
// }
verify(username: any, password: any) {
      // Make sure email and password are not undefined
      if (username && password) {
        this.dataSource.verify(username, password).subscribe(response => {
          // Handle the response as string
          if (response== "Data Matched") {
            this.router.navigateByUrl("/main");
          } else {
            // Handle the error case
            this.showError("Invalid email or password");
          }
        }, error => {
          // Handle any error that occurs during the API call
          this.showError("API Error: " + error);
        });
      } else {
        // Handle the case where email or password is undefined
        this.showError("Email or password is undefined");
      }
    }
    
    showError(errorMsg: string) {
      // Display the error message on the page (you can customize this part based on your application's UI)
      alert(errorMsg);
    }
      
          
          
          }
          
             
        
        
    