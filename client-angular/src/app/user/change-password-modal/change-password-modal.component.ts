import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { deleteAllCookies } from '../../objects/Cookiee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-modal',
  templateUrl: './change-password-modal.component.html',
  styleUrls: ['./change-password-modal.component.css']
})
export class ChangePasswordModalComponent implements OnInit {
  changePasswordFailed: boolean;
  showModal() {
    document.getElementById('buttonShowChangePasswordModal').click();
  }
  changePassword(form) {
    // tslint:disable-next-line:prefer-const
    delete form.value.new_passwordReEnter;
    this.userService.changePassword(form.value)
      .then(r => {
        if (r) {
          document.getElementById('closeChangePasswordModal').click();
          deleteAllCookies();
          window.alert('Cập nhập mật khẩu thành công');
          this.route.navigate(['']);
          window.location.reload();
        } else {
          this.changePasswordFailed = true;
        }
      }).catch(e => { window.alert('cập nhập mật khẩu thất bại'); });
  }
  constructor(private userService: UserService, private route: Router) { }

  ngOnInit() {
    // this.showModal();
  }

}
