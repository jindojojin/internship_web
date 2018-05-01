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
  @Output() userInfor = new EventEmitter<User>();
  
  constructor(private signInService: SignInService) { }
  
  ngOnInit() {
  }

  onSubmit(formSignIn) {
    // console.log(formSignIn.value);
    
    this.signInService.sendPost(formSignIn.value)
      .then(result => {
        document.getElementById("closeModal").click(); 
        console.log(typeof result['username']);
        let user = new User(result['username'],result['userID']);
        this.userInfor.emit(user);
      })
      .catch(err => {
        document.getElementById("error").innerHTML="Tên đăng nhập hoặc mật khẩu không đúng!"
      });
  }
}
