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
  // tslint:disable-next-line:member-ordering
  assessions: any[] = null;
  // tslint:disable-next-line:member-ordering
  canFixInfors: any[];
  // tslint:disable-next-line:member-ordering
  cantFixInfors: any[];
  // tslint:disable-next-line:member-ordering
  isMyProfile: boolean;
  // tslint:disable-next-line:member-ordering
  logo: string;
  // tslint:disable-next-line:member-ordering
  fileLogoToUpload: File;
  // tslint:disable-next-line:member-ordering
  userName: string;
  // tslint:disable-next-line:member-ordering
  id: string;
  type:string;

  constructor(private route: ActivatedRoute, private profilePageService: ProfilePageService) { }

  reloadThisComponent() {
    console.log('đã reload');
    this.ngOnInit();
  }

  changeProfile(userID) {
    this.id = userID;
    this.profilePageService.getProfile(this.id).then(res => {
      console.log(res);
      this.assessions = res.assession;
      // tslint:disable-next-line:triple-equals
      this.logo = (res.logo != '' && res.logo != null) ? (myWebsiteDomain + res.logo)
        : ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCq8ocdeBpdZgNebcoY0sM0Fl4T5rs31ughmmkCuVGkJ9lCASlA');
      const arrInfors = Object.keys(res).map(function (key) { // chuyển object thành mảng các trường{tên trường:giá trị}
        return { fieldName: String(key), fieldValue: res[key] };
      });
      if (this.isMyProfile) {
        const canfix = this.getNumberOfCanFix(); // số thông tin có thể thay đổi
        const cantfix = this.getNumberOfCantFix(); // số thông tin không thể thay đổi
        this.cantFixInfors = arrInfors.slice(0, cantfix);
        this.canFixInfors = arrInfors.slice(cantfix, canfix + cantfix);
        // console.log(this.cantFixInfors);
        // console.log(this.canFixInfors);
      } else {
        this.cantFixInfors = arrInfors.slice(0, arrInfors.length - 2);
      }
      // console.log(this.userInfors);
    }
    ).catch(e => console.log(e));
  }

  ngOnInit() {
    this.initPage();
  }
  initPage() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log('id của route' + this.id);
    // tslint:disable-next-line:triple-equals
    if (this.id == getCookie('userID')) { this.isMyProfile = true; } else { this.isMyProfile = false; }
    this.profilePageService.getProfile(this.id).then(res => {
      console.log(res);
      this.userName = res.name;
      this.assessions = res.assession;
      this.type = res.type;
      // tslint:disable-next-line:triple-equals
      this.logo = (res.logo != '' && res.logo != null) ? (myWebsiteDomain + res.logo)
        : ('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJCq8ocdeBpdZgNebcoY0sM0Fl4T5rs31ughmmkCuVGkJ9lCASlA');
      const arrInfors = Object.keys(res).map(function (key) { // chuyển object thành mảng các trường{tên trường:giá trị}
        return { fieldName: String(key), fieldValue: res[key] };
      });
      if (this.isMyProfile) {
        const canfix = this.getNumberOfCanFix(); // số thông tin có thể thay đổi
        const cantfix = this.getNumberOfCantFix(); // số thông tin không thể thay đổi
        this.cantFixInfors = arrInfors.slice(0, cantfix);
        this.canFixInfors = arrInfors.slice(cantfix, canfix + cantfix);
        // console.log(this.cantFixInfors);
        // console.log(this.canFixInfors);
      } else {
        // tslint:disable-next-line:triple-equals
        if (getCookie('userType') == 'admin') {
          this.canFixInfors = arrInfors.slice(0, this.adminCanfix(res.type));
          this.cantFixInfors = arrInfors.slice(this.adminCanfix(res.type), arrInfors.length - 4);
        } else {
          this.cantFixInfors = arrInfors.slice(0, arrInfors.length - 4);
        }
      }
      // console.log(this.userInfors);
    }
    ).catch(e => console.log(e));
  }
  changeAvatar(event) {
    this.fileLogoToUpload = event;
    // console.log(this.logo);
  }

  submitProfile(formProfile) {
    const formData = new FormData();
    formData.append('logo', this.fileLogoToUpload);
    formData.append('infor', JSON.stringify(formProfile.value));
    console.log(formData);
    if (this.isMyProfile) {
      this.profilePageService.updateProfile(formData).then(r => { window.alert('Đã cập nhập profile thành công!'); this.ngOnInit(); })
        .catch(e => { console.log(e); window.alert('Đã xảy ra lỗi ở server, cập nhập profile thất bại'); this.ngOnInit(); });
    } else {
      if (getCookie('userType') === 'admin') {
        // tslint:disable-next-line:max-line-length
        this.profilePageService.adminUpdateProfile(this.id, formData)
        .then(r => { window.alert('Đã cập nhập profile thành công!'); this.ngOnInit(); })
        .catch(e => { console.log(e); window.alert('Đã xảy ra lỗi ở server, cập nhập profile thất bại'); this.ngOnInit(); });
      }
    }

  }

  getNumberOfCanFix() {
    switch (getCookie('userType')) {
      case 'student': return 8;
      case 'admin': return 6;
      case 'lecturer': return 6;
      case 'partner': return 5;
      default: return 0;
    }
  }

  getNumberOfCantFix() {
    switch (getCookie('userType')) {
      case 'student': return 10;
      case 'admin': return 0;
      case 'lecturer': return 0;
      case 'partner': return 0;
      default: return 0;
    }
  }
  adminCanfix(userType): number {
    switch (userType) {
      case 'student': return 10;
      case 'admin': return 0;
      case 'lecturer': return 3;
      case 'partner': return 4;
      default: return 0;
    }
  }

}
