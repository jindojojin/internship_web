import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { getCookie } from '../../../objects/Cookiee';

@Component({
  selector: 'app-overview-avatar',
  templateUrl: './overview-avatar.component.html',
  styleUrls: ['./overview-avatar.component.css']
})
export class OverviewAvatarComponent implements OnInit {
  constructor() { }
  @Input() canModify: boolean;
  @Input() avatar: string;
  @Output() newAvatar = new EventEmitter();
  @Input() userName: string;
  @Input() type: string;
  showIMG(event) {
    let reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      reader.readAsDataURL(file);
      let ava;
      reader.onload = (e: any) => {
        let ava = document.getElementById("avatar") as HTMLImageElement;
        ava.src = e.target.result;
        this.newAvatar.emit(file);
      };
    }
  }

  ngOnInit() {
  }

}
