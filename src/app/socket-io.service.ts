import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  constructor(private socket: Socket) { 
    
  }

  public verifyUser = () => {
    console.log("verifyUser");
    return Observable.create((observer) => {

      this.socket.on('verifyUser', (data) => {

        observer.next(data);

      }); // end Socket

    }); // end Observable

  } 

  public onlineUserList(){
    return Observable.create((observer)=>{
      this.socket.on("online-user-list", (data)=>{
        observer.next(data);
      });
    });
  }

   public setOnline = (authToken) => {
    console.log("verifyUser");
    this.socket.emit("set-user", authToken);

  } 

public sendMessage = () => {
    let x = {                   senderName: 'Abc Xyze',
                                senderId: 'xx2-eI9kC',
                                receiverName: 'Surbhi',
                                receiverId: 'pUj7fBmie',
                                message: 'Hey Back',
                                createdOn: new Date()
                            }
    console.log("send chat Message");
    this.socket.emit("chat-msg", x);

  } 


}
