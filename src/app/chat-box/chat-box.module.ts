import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {RouterModule, Routes } from '@angular/router';

import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path:'chatBox', component: ChatBoxComponent}])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatBoxModule { }
