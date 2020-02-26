import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { TooComponent } from './too/too.component'; 

import { FormsModule } from '@angular/forms'; //import this when use ngModule
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HomeComponent } from './home/home.component'; //import this for routing to work
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    TooComponent,
    RegisterComponent,
    SignInComponent,
    HomeComponent,
    
  ],
  imports: [
    ModalModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,//import this when use ngModule
    TooltipModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component:SignInComponent},
      { path: 'home', component:HomeComponent},

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
