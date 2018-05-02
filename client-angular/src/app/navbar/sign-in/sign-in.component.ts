import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { SignInService } from './sign-in.service';
import{User} from '../../objects/User'
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
    // console.log(formSignIn.value);
    
    this.signInService.sendPost(formSignIn.value)
      .then(result => {
        console.log(result);        
        document.cookie="userToken = "+result.usertoken;
        document.cookie="nickname = "+result.nickname;
        document.cookie="userID = "+result.userID;
        document.cookie="userType = "+result.usertype;
        document.getElementById("closeModal").click(); 
        this.loggedIn.emit();
      })
      .catch(err => {
        document.getElementById("error").innerHTML="Tên đăng nhập hoặc mật khẩu không đúng!"
      });
  }
}
