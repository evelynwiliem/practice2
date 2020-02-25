import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor() { }
  un='';pass='';
  ngOnInit(): void {
  }

  signIn(){
    
    if(this.un=='admin' && this.pass=='password'){
      console.log('berhasil');
    }
    else if(this.un=='admin' && this.pass!='password' ||this.un!='admin' && this.pass=='password' ){
      console.log("try again, wrong username or password")
    }
    else{
      console.log('gagal');
    }
  }
}
