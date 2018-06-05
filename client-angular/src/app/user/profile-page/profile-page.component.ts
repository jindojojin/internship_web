import { Component, OnInit } from '@angular/core';
import { ProfilePageService } from './profile-page.service';
import { getCookie } from '../../objects/Cookiee';
import { ActivatedRoute } from '@angular/router';
import { myWebsiteDomain } from '../../objects/appConfig';

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
  logo:string;
  fileLogoToUpload:File;
  userName:string;
  id:string;

  constructor(private route: ActivatedRoute,private profilePageService: ProfilePageService) { }

  ngOnInit() {
    this.initPage();      
  }
  initPage(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.userName = this.route.snapshot.paramMap.get('username');
    if(this.id == getCookie("userID")) this.isMyProfile = true; else this.isMyProfile = false;
    this.profilePageService.getProfile(this.id).then(res => {
      console.log(res);
      this.logo =(res.logo != "" && res.logo != null)? (myWebsiteDomain + res.logo):("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCq8ocdeBpdZgNebcoY0sM0Fl4T5rs31ughmmkCuVGkJ9lCASlA");
      let arrInfors = Object.keys(res).map(function (key) { // chuyển object thành mảng các trường{tên trường:giá trị}
        return { fieldName: String(key), fieldValue: res[key] };
      });
      if( this.isMyProfile){
      let canfix = this.getNumberOfCanFix();// số thông tin có thể thay đổi
      let cantfix= this.getNumberOfCantFix(); //số thông tin không thể thay đổi
      this.cantFixInfors = arrInfors.slice(0,cantfix); 
      this.canFixInfors = arrInfors.slice(cantfix,canfix+cantfix);
      // console.log(this.cantFixInfors);
      // console.log(this.canFixInfors);
      }else{
        this.cantFixInfors = arrInfors.slice(0,arrInfors.length - 2);
      }
      // console.log(this.userInfors);
    }
    ).catch(e => console.log(e))
  }
  changeAvatar(event){
    this.fileLogoToUpload = event;
    // console.log(this.logo);
  }

  submitProfile(formProfile){
    let formData = new FormData();
    formData.append("logo",this.fileLogoToUpload);
    formData.append("infor",JSON.stringify(formProfile.value));
    console.log(formData);
    this.profilePageService.updateProfile(formData).then(r => {window.alert("Đã cập nhập profile thành công!");this.ngOnInit()})
    .catch(e => {console.log(e); window.alert("Đã xảy ra lỗi ở server, cập nhập profile thất bại");this.ngOnInit()});    
  }

  getNumberOfCanFix() {
    switch (getCookie("userType")) {
      case "student": return 8;
      case "admin": return 6;
      case "lecturer": return 6;
      case "partner": return 5;
      default: return 0;
    }
  }

  getNumberOfCantFix() {
      switch (getCookie("userType")) {
        case "student": return 11;
        case "admin": return 0;
        case "lecturer": return 0;
        case "partner": return 0;
        default: return 0;
      }
  }

}
