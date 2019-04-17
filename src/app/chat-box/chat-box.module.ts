import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import {RouterModule, Routes } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path:'chatBox', component: ChatBoxComponent}])
  ],
  declarations: [ChatBoxComponent]
})
export class ChatBoxModule { }
