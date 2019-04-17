import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserSetUpService} from '../../user-set-up.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  private userName;
  private userLastname;
  private userPhnNumber;
  private email;
  private password;
  private apiKey;
  constructor(private _router: Router, private _userSetUpService:UserSetUpService) { }
  
  goToLogin(){
    console.log("Loging In...")
    this._router.navigate(['/login']);
  }

  signUpClick(){
    let userDetails = {
      firstName: this.userName,
      lastName: this.userLastname,
      email:  this.email,
      mobileNumber:this.userPhnNumber,
      password: this.password,
      apiKey: this.apiKey
    }
    console.log(userDetails);
    var userSignUp = this._userSetUpService.signUp(userDetails);
    userSignUp.subscribe(
      data=> console.log(data)
    )
  }

  ngOnInit() {
  }

}
