import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './user/login/login.component';
import {FormsModule} from '@angular/forms';
import {UserModule} from './user/user.module'
import {ChatBoxModule} from './chat-box/chat-box.module';
import { FilterUserListPipe } from './filter-user-list.pipe'
import { CookieService } from 'ngx-cookie-service';

const route = [{ path: 'login', component: LoginComponent, pathMatch: 'full' },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '*', component: LoginComponent },
      { path: '**', component: LoginComponent }];
@NgModule({
  declarations: [
    AppComponent,
    FilterUserListPipe
  ],
  imports: [FormsModule,
    ChatBoxModule,
    BrowserModule,
    UserModule,
    RouterModule.forRoot(route)
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
