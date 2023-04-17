import { Component} from '@angular/core';
import { LoginRepository } from '../model/DataRepository';
import { Router } from '@angular/router';
import { RoomType } from '../model/RoomType';

@Component({
    selector: 'login',
    templateUrl: 'Login.component.html',
    styleUrls: ['Login.component.css']
})

export class LoginComponent  {
  
    Available:number=0
    Booked:number=0
    constructor(private router:Router,private repo:LoginRepository) { }
    
   get RoomType():RoomType[]
   {
    return this.repo.getRoomType()
   }
    

    bookRoom(room:any)
    {
        
    }

    
    login()
    {
        this.router.navigateByUrl("/signin")
    }
 
    
}