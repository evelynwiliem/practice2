import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'signIn', component:SignInComponent},  //this means when component acces through url, will show localhost:4200/signin
  {path: 'signUp', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'about', component:AboutComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
