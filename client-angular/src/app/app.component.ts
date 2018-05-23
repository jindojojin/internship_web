import { Component, OnInit } from '@angular/core';
import { getCookie } from './objects/Cookiee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  logged: boolean;

  ngOnInit() {
    this.logged = (getCookie("userToken") != undefined);
  }

  
}
