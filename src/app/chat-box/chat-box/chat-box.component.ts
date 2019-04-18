import { Component, OnInit } from '@angular/core';
import {SocketIoService} from '../../socket-io.service'
import {UserSetUpService} from '../../user-set-up.service'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  userList:any=[];
  messageList:any=[];
  constructor(private _socketioservice:SocketIoService, private _usersetupservice: UserSetUpService, private _cookieService:CookieService) { }

  ngOnInit() {
    this.verifyUserConfirmation();
    this.setOnline();
    this.getOnlineUserList();
  }

  public verifyUserConfirmation: any = () => {

    var x = this._socketioservice.verifyUser();
    console.log(x);
    x.subscribe((data) => {
        console.log(data["data"]);
        //this.disconnectedSocket = false;

        //this.SocketService.setUser(this.authToken);

      });
    }

public getChat(senderId){
  console.log("component getCHat");
  var x = this._usersetupservice.getChat(senderId);
  x.subscribe(
    data=> {
      console.log(data);
      this.messageList = data["data"];  
    }     
     
  )
}
    public getOnlineUserList(){
      
      var userList = this._socketioservice.onlineUserList();
      userList.subscribe(
        data=> {console.log(data);
          let userList:any = [];
          let transformedArray;
          for(var x in data){
        console.log(x);
        let temp = {'userId':x, 'userName':data[x]}
      
      userList.push(temp);  
      } console.log(userList);
      this.userList = this.removeDuplicates(userList,'userId');
      console.log(this.userList);
      }
      )
    }
 
   removeDuplicates(myArr, userId) {
    return myArr.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj[userId]).indexOf(obj[userId]) === pos;
    });
  }



setOnline = () => {
  let authToken = this._cookieService.get('authtoken');
     this._socketioservice.setOnline(authToken);
    //console.log(x);
    
    }

sendMsg()
{
  this._socketioservice.sendMessage();
}
}
