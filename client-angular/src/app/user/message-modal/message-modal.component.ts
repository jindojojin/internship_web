import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ValueTransformer } from '@angular/compiler/src/util';
import { MessageModalService } from './message-modal.service';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
  providers:[MessageModalService]
})
export class MessageModalComponent implements OnInit {
  @Input() receiverName:string;
  @Input() receiverID:string;
  @Input() sendNew:string ="true";
  @Input() title:string;
  @Output() messageSent = new EventEmitter();
  constructor(private messageModalService: MessageModalService) {}
  messageWasSent:boolean=false;

  onSubmit(messageForm){
    console.log("đã submit");
    console.log(messageForm.value);
    
    messageForm.value.title= this.title;
    let value = {title:messageForm.value.title, content:messageForm.value.content,receiverID:this.receiverID};
    this.messageModalService.sendMessage(value,this.sendNew).then(
      r=> {
        console.log(r);
       this.messageWasSent=true;
       setTimeout(() => {
        document.getElementById(this.receiverID).click();
       this.messageSent.emit();        
       }, 600);
      }
    ).catch(e => console.log(e)
    )

  }
  ngOnInit() {
  }

}
