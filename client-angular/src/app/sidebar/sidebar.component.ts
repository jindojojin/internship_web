import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { deleteAllCookies, getCookie } from '../objects/Cookiee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  userType: string;
  userID: string;
  nickname: string;
  user;
  constructor(private router: Router) { }
  @Output() hideMe = new EventEmitter();

  hideMeNow() {
    this.hideMe.emit();
  }

  ngOnInit() {
    this.userID = getCookie('userID');
    this.userType = getCookie('userType');
    this.nickname = getCookie('nickname');
  }

  logOut() {
    deleteAllCookies();
    window.location.reload();
    this.router.navigate(['']);
  }
}
