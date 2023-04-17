import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule ,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { SignInModule } from './signIn/SignIn.module';
import { LoginComponent } from './signIn/Login.component';
import { FrontpageComponent } from './signIn/Frontpage.component';
import { SignInComponent } from './signIn/SignIn.component';
import { RoomsComponent } from './signIn/Rooms.component';
import { ModelModule } from './model/Model.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { BookingFormComponent } from './components/booking-form/booking-form.component';

@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    BrowserModule,SignInModule,ModelModule, MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    RouterModule.forRoot([
      {
        path:"signup",component:LoginComponent
      },
      {
        path:"main",component:FrontpageComponent,
        children:[
          {
            path: 'rooms/1/1', component: RoomsComponent
          }
        ]
        
      },
      {
        path:"signin",component:SignInComponent
      },
       {
          path: 'main/rooms/1/1', component: RoomsComponent ,
       },
      {
        path: 'rooms', component: RoomsComponent ,
      },
      {
        path:"booking-form/:rentId/:roomType:id", component:BookingFormComponent
      },
      {
        path:"**", redirectTo:"/signin"
      }
      
    ]),
    BrowserAnimationsModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
