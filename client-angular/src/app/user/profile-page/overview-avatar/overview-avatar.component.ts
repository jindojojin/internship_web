import { Component, OnInit } from '@angular/core';
import { getCookie } from '../../../objects/Cookiee';

@Component({
  selector: 'app-overview-avatar',
  templateUrl: './overview-avatar.component.html',
  styleUrls: ['./overview-avatar.component.css']
})
export class OverviewAvatarComponent implements OnInit {
  avatar:string = "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
  userName: string ="TRẦN THỊ MINH NGUYỆT";
  constructor() { }
  showIMG(event) {
    {
      let reader = new FileReader();
      if(event.target.files && event.target.files.length > 0) {
        let file = event.target.files[0];
        reader.readAsDataURL(file);
        console.log(file);
        
        reader.onload = () => {
          
        };
      }
    }
}

  ngOnInit() {
    this.userName = getCookie("nickname");
  }

}
