import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
  un='';pass='';
  ngOnInit(): void {
  }

  signIn(){
    
    if(this.un=='admin' && this.pass=='password'){
      console.log('berhasil');
      this.router.navigate(['/home']);
    }
    else if(this.un=='admin' && this.pass!='password' ||this.un!='admin' && this.pass=='password' ){
      console.log("try again, wrong username or password")
    }
    else{
      console.log('gagal');
    }
  }
}
