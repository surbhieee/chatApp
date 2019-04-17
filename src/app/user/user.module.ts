import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {HttpClientModule } from '@angular/common/http';

const config: SocketIoConfig = { url: 'https://chatapi.edwisor.com', options: {} };

//const Route = 

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:'signUp', component: SignupComponent}]),
    SocketIoModule.forRoot(config),
    HttpClientModule 
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class UserModule { }
