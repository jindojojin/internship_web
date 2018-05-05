import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SignInService } from './sign-in.service';
<<<<<<< HEAD
import{User} from '../../objects/User'
import { setCookie } from '../../objects/Cookiee';
=======
import { User } from '../../objects/User';

>>>>>>> dddf7c5d7117ad5d49ce258951453f0c83fb4945
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
<<<<<<< HEAD
        console.log(result);        
        setCookie("nickname",result.nickname,2);
        setCookie("userID",result.userID,2);
        setCookie("userType",result.usertype,2);
        setCookie("userToken",result.usertoken,2);
=======
        // console.log(result);
        document.cookie = "userToken = " + result.usertoken;
        document.cookie = "nickname = " + result.nickname;
        document.cookie = "userID = " + result.userID;
        document.cookie = "userType = " + result.usertype;
>>>>>>> dddf7c5d7117ad5d49ce258951453f0c83fb4945
        document.getElementById("closeModal").click();
        this.loggedIn.emit();
      })
      .catch(err => {
        document.getElementById("error").innerHTML = "Tên đăng nhập hoặc mật khẩu không đúng!"
      });
  }
}
