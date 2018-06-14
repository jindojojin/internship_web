import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MessagePageService } from './message-page.service';
import { getCookie } from '../../objects/Cookiee';
import { MessageModalService } from '../message-modal/message-modal.service';
import { isReplyMessage } from '../../objects/regex';
import { MessageModalComponent } from '../message-modal/message-modal.component';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
  providers: [MessagePageService, MessageModalService]
})
export class MessagePageComponent implements OnInit {
  listConversations: any[] = [];
  currentConversation: any[] = [];
  userID;

  constructor(private messagePageService: MessagePageService, private messageModalService: MessageModalService) { }

  @ViewChild(MessageModalComponent) messageModal: MessageModalComponent;
  sendMessageWithNewTile() {
    this.messageModal.sendNew = 'true';
    let lastMessage = this.currentConversation[this.currentConversation.length - 1]
    let receiverID = (lastMessage.receiverID == this.userID) ? (lastMessage.senderID) : (lastMessage.receiverID);
    this.messageModal.receiverID = receiverID;
    this.messageModal.receiverName = this.currentConversation[0].senderName;
    // while(this.messageModal.messageWasSent == false){
    //   // this.ngOnInit();
    // }
  }
  catchEnterPress(event) {
    if (event.code == "Enter") this.replyMessage();
  }

  updateMessage(index) {
    this.currentConversation.forEach(element => {
      if (element.status == 'unread' && element.receiverID == this.userID) {
        this.messagePageService.markMessageAsRead(element.messageID);
        this.getMessage();        
      }
    });
    this.currentConversation = this.listConversations[index];
  }
  getStyle(index) {
    let lastMessage = this.listConversations[index][this.listConversations[index].length - 1]
    if (lastMessage.status == 'unread' && lastMessage.receiverID == this.userID)
      return "dodgerblue";
  }

  replyMessage() {
    let inputBox = document.getElementById("contentMessage") as HTMLInputElement;
    let content = inputBox.value;
    if (content == "") return;
    let lastMessage = this.currentConversation[this.currentConversation.length - 1]
    let receiverID = (lastMessage.receiverID == this.userID) ? (lastMessage.senderID) : (lastMessage.receiverID);
    let title = (isReplyMessage(lastMessage.title)) ? (lastMessage.title) : ('Re: ' + lastMessage.title);
    let value = {
      senderID: this.userID,
      receiverID: receiverID,
      content: content,
      title: title
    }
    this.messageModalService.sendMessage(value, 'false').then(
      r => { inputBox.value = ""; this.currentConversation.push(value)}
    )
  }

  ngOnInit() {
    this.userID = getCookie("userID");
    this.messagePageService.getMessages()
      .then(r => { this.listConversations = r; this.currentConversation = r[0]; console.log(this.listConversations); }
      )
      .catch(e => window.alert("Đã có lỗi xảy ra, xin lỗi vì sự bất tiện này!"))
  }

  getMessage(){
    this.messagePageService.getMessages()
      .then(r => { this.listConversations = r; }
      )
      .catch(e => window.alert("Đã có lỗi xảy ra, xin lỗi vì sự bất tiện này!"))
  }


}
