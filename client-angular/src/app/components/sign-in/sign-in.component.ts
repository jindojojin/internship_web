import { Component, OnInit } from '@angular/core';
import { SignInService } from './sign-in.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [SignInService]
})

export class SignInComponent implements OnInit {
  constructor(private signInService: SignInService) { }

  ngOnInit() {
  }

  onSubmit(formSignIn) {
    console.log(formSignIn.value);
    this.signInService.sendPost(formSignIn.value)
      .then(result => console.log(result))
      .catch(err => console.log(err));
  }
}
