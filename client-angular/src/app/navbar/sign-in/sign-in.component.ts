import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { SignInService } from './sign-in.service';
import { setCookie } from '../../objects/Cookiee';
import { ChangePasswordModalComponent } from '../../user/change-password-modal/change-password-modal.component';
import { NotificationPopupComponent } from '../notification-popup/notification-popup.component';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})

export class SignInComponent implements OnInit {
  @Output() loggedIn = new EventEmitter();
  @ViewChild(ChangePasswordModalComponent)
  changePassword: ChangePasswordModalComponent;
 


  constructor(private signInService: SignInService) { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    formSignIn.value.username = formSignIn.value.username.replace('@vnu.edu.vn', '');
    this.signInService.sendPost(formSignIn.value)
      .then(result => {
        console.log(result);
        if (result.usertype === 'partner' && result.passwordChanged === 0) {
          console.log('xác định là phải đổi mật khẩu');
          setCookie('userID', result.userID, 2);
          setCookie('userToken', result.usertoken, 2);

          document.getElementById('closeModal').click();
          this.changePassword.showModal();

        } else {
          // window.location.reload();
          setCookie('nickname', result.nickname, 2);
          setCookie('userID', result.userID, 2);
          setCookie('userType', result.usertype, 2);
          setCookie('userToken', result.usertoken, 2);
          console.log('đã lưu cookies');
          document.getElementById('closeModal').click();

          this.loggedIn.emit();
        }
      })
      .catch(err => {
        console.log(err);
        document.getElementById('error').innerHTML = 'Tên đăng nhập hoặc mật khẩu không đúng!';
      });
  }
}
