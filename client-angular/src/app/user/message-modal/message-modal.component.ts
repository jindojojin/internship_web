import { Component, OnInit, Input } from '@angular/core';
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
  constructor(private messageModalService: MessageModalService) {}
  messageWasSent:boolean=false;

  onSubmit(messageForm){
    console.log("đã submit");
    console.log(messageForm.value);
    
    
    let value = {title:messageForm.value.title, content:messageForm.value.content,receiverID:this.receiverID};
    this.messageModalService.sendMessage(value).then(
      r=> {
       this.messageWasSent=true;
       setTimeout(() => {
        document.getElementById("closeModal").click();
       }, 1000);
      }
    ).catch(e => console.log(e)
    )

  }
  ngOnInit() {
  }

}
