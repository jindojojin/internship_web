import { Component, OnInit } from '@angular/core';
import { ProfilePageService } from './profile-page.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers:[ProfilePageService]
})
export class ProfilePageComponent implements OnInit {

  constructor(private profilePageService: ProfilePageService) { }

  ngOnInit() {
    this.profilePageService.getProfile().then( res => console.log(res)
    ).catch( e => console.log(e))
  }

}
