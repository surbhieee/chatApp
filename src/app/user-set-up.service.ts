import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})


export class UserSetUpService {
  signUpURL = "https://chatapi.edwisor.com/api/v1/users/signup";
  loginURL = "https://chatapi.edwisor.com/api/v1/users/login";
  authToken;
  //authToken = "?authToken=MmEzMGU0YWMwYTQ5OWQzY2MwOWMyYTkzYmQyNTg5NmE4NzQxYWJhN2ZhMTExYzEyYTM0MjYzODllMzM3Y2JiOTBkZjZkMDcyZTc5NzIzOGY1YzEzM2UwNDc1OTBkOGI4ZDFlYTBiMzViMjQzNDgyOTExY2VmZWU5ZTI1MmJlNDg0Mg==";
  constructor(private _httpClient: HttpClient) { }
getAuthToken(){
  return this.authToken;
}
setAuthToken(authToken){
  this.authToken = authToken;
}
  signUp(userData){
    console.log(userData);
    console.log(`${this.signUpURL}`);
    return this._httpClient.post(`${this.signUpURL}`, userData);
  }

  login(userData){
    return this._httpClient.post(`${this.loginURL}`, userData);
  }
 public getChat(): Observable<any> {
   console.log("Service Getchat");
    return this._httpClient.get(`https://chatapi.edwisor.com/api/v1/chat/get/for/user?senderId=pUj7fBmie&receiverId=xx2-eI9kC&authToken=${this.authToken}`)
      .do(data => console.log('Data Received'));

  } // end logout function

}
