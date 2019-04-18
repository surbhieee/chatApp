import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserSetUpService} from '../../user-set-up.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private email;
  private password;
  constructor(private _router:Router, private _usersetupservice:UserSetUpService, private _cookieService:CookieService) { }
    
  goToSignUp(){
    console.log("Signing Up...")
    this._router.navigate(['/signUp']);
  }
  loginClick(){
    let userData = {
      email : this.email,
      password: this.password
    }
    var apiResponse = this._usersetupservice.login(userData);
    apiResponse.subscribe((apiResponse) => {

          if (apiResponse["status"] === 200) {
            console.log(apiResponse)
            console.log(apiResponse["data"].authToken);
            //this._usersetupservice.setAuthToken(apiResponse["data"].authToken)
             this._cookieService.set('authtoken', apiResponse["data"].authToken);

            this._cookieService.set('receiverId', apiResponse["data"].userDetails.userId);

            this._cookieService.set('receiverName', apiResponse["data"].userDetails.firstName + ' ' + apiResponse["data"].userDetails.lastName);

            this._usersetupservice.setUserInfoInLocalStorage(apiResponse["data"].userDetails)

             this._router.navigate(['/chatBox']);

          }
    
    } )
  }
  ngOnInit() {
  }

}
