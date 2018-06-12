import { Component, OnInit } from '@angular/core';
import { MessagePageService } from './message-page.service';
import { getCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.css'],
  providers:[MessagePageService]
})
export class MessagePageComponent implements OnInit {
  listConversations:any[]=[];
  currentConversation:any[]=[];
  userID;

  constructor(private messagePageService: MessagePageService) { }

  updateMessage(index){
    this.currentConversation = this.listConversations[index];
    this.currentConversation.forEach(element => {
      if(element.status=='unread' && element.receiverID == this.userID){
        this.messagePageService.markMessageAsRead(element.messageID);
      }
      this.ngOnInit();
    });
  }
  getStyle(index){
    let lastMessage= this.listConversations[index][this.listConversations[index].length -1]
    if(lastMessage.status == 'unread' && lastMessage.receiverID== this.userID)
    return "dodgerblue";
  }

  ngOnInit() {
    this.userID = getCookie("userID");
    this.messagePageService.getMessages()
    .then(r => {this.listConversations= r; this.currentConversation=r[0]; console.log(r);}
    )
    .catch(e => window.alert("Đã có lỗi xảy ra, xin lỗi vì sự bất tiện này!"))    
  }

}
