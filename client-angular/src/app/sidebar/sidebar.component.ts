import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deleteAllCookies, getCookie } from '../objects/Cookiee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  @Output() loggedOut = new EventEmitter();
  userType: string;
  userID: string;
  nickname: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.userID = getCookie("userID");
    this.userType = getCookie("userType");
    this.nickname = getCookie("nickname");
    // console.log("userType");
  }

  logOut() {
    deleteAllCookies();
    window.location.reload();
    this.router.navigate(['']);
    // this.loggedOut.emit();
  }
}
