import { Component, OnInit } from '@angular/core';
import {SocketIoService} from '../../socket-io.service'
import {UserSetUpService} from '../../user-set-up.service'

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor(private _socketioservice:SocketIoService, private _usersetupservice: UserSetUpService) { }

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

public getChat(){
  console.log("component getCHat");
  var x = this._usersetupservice.getChat();
  x.subscribe(
    data=> {console.log(data)}
  )
}
    public getOnlineUserList(){
      var userList = this._socketioservice.onlineUserList();
      userList.subscribe(
        data=> {console.log(data);}
      )
    }

public setOnline: any = () => {
  let authToken = this._usersetupservice.getAuthToken();
     this._socketioservice.setOnline(authToken);
    //console.log(x);
    
    }

sendMsg()
{
  this._socketioservice.sendMessage();
}
}
