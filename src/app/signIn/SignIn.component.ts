import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginRepository } from '../model/DataRepository';
import { NgForm } from '@angular/forms';
import { Login } from '../model/login';
@Component({
    selector: 'signin',
    templateUrl: 'SignIn.component.html',
    styleUrls: ['SignIn.component.css']
})

export class SignInComponent  {

    login:Login=new Login();
    constructor(private repo:LoginRepository, private router:Router) { }


    // get Login():Login[]
    // {
    //    return this.repo.getLoginDetails();
    // }


    onSubmit(form:NgForm)
    {
        console.log("working");
        this.repo.verify(this.login.username,this.login.password)
        
    }


}