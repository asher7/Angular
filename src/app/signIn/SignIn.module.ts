import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FrontpageComponent } from './Frontpage.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './Login.component';
import { SignInComponent } from './SignIn.component';
import { RoomsComponent } from './Rooms.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { BookingFormComponent } from '../components/booking-form/booking-form.component';
import { DatePipe } from '@angular/common';
@NgModule({
    imports: [BrowserModule,FormsModule,RouterModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
       MatGridListModule,
        MatFormFieldModule,
        BrowserAnimationsModule,

        MatCardModule,],
    exports: [FrontpageComponent,LoginComponent,SignInComponent,RoomsComponent],
    declarations: [FrontpageComponent,LoginComponent,SignInComponent,RoomsComponent,BookingFormComponent],
    providers: [DatePipe],
})
export class SignInModule { }
