import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignInService } from './sign-in.service';
import { User } from '../../objects/User';
import { setCookie } from '../../objects/Cookiee';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})

export class SignInComponent implements OnInit {
  @Output() loggedIn = new EventEmitter<User>();

  constructor(private signInService: SignInService) { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    this.signInService.sendPost(formSignIn.value)
      .then(result => {
        console.log(result);        
        setCookie("nickname",result.nickname,2);
        setCookie("userID",result.userID,2);
        setCookie("userType",result.usertype,2);
        setCookie("userToken",result.usertoken,2);
        document.getElementById("closeModal").click();
        this.loggedIn.emit();
      })
      .catch(err => {
        document.getElementById("error").innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng!"
      });
  }
}
