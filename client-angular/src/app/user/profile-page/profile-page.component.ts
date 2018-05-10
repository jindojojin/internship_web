import { Component, OnInit } from '@angular/core';
import { ProfilePageService } from './profile-page.service';
import { getCookie } from '../../objects/Cookiee';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
  providers: [ProfilePageService]
})
export class ProfilePageComponent implements OnInit {

  canFixInfors: any[];
  cantFixInfors: any[];
  isMyProfile:boolean;

  constructor(private route: ActivatedRoute,private profilePageService: ProfilePageService) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    if(id == getCookie("userID")) this.isMyProfile = true; else this.isMyProfile = false;
    this.profilePageService.getProfile(id).then(res => {

      let arrInfors = Object.keys(res).map(function (key) { // chuyển object thành mảng các trường{tên trường:giá trị}
        return { fieldName: String(key), fieldValue: res[key] };
      });
      if( this.isMyProfile){
      let canfix = this.getNumberOfCanFix();// số thông tin có thể thay đổi
      let cantfix= this.getNumberOfCantFix(); //số thông tin không thể thay đổi
      this.cantFixInfors = arrInfors.slice(0,cantfix);
      this.canFixInfors = arrInfors.slice(cantfix, canfix+cantfix-1);
      }else{
        this.cantFixInfors = arrInfors;
      }
      // console.log(this.userInfors);
    }
    ).catch(e => console.log(e))
  }

  getNumberOfCanFix() {
    switch (getCookie("userType")) {
      case "student": return 8;
      case "admin": return 2;
      case "lecturer": return 2;
      case "partner": return 2;
      default: return 0;
    }
  }

  getNumberOfCantFix() {
    switch (getCookie("userType")) {
      case "student": return 10;
      case "admin": return 2;
      case "lecturer": return 2;
      case "partner": return 2;
      default: return 0;
    }
  }

}
