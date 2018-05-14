import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lecturer-card',
  templateUrl: './lecturer-card.component.html',
  styleUrls: ['./lecturer-card.component.css']
})
export class LecturerCardComponent implements OnInit {
  @Input() lecturerName:string;
  @Input() lecturerAvatar:string;

  constructor() { }

  ngOnInit() {
    if(!this.lecturerAvatar) {
      this.lecturerAvatar = "https://www.teqport.com/images/employees/lower_res/Placeholder_no_text.svg.png";
    }
  }

}
