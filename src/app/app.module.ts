import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {FormsModule} from '@angular/forms';

const route = [{path: "login", component: LoginComponent},
{path: "*", component: LoginComponent},
{ path: '**', component: LoginComponent }];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [FormsModule,
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
