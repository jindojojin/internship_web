import { Component, OnInit } from '@angular/core';
import { AddUserService } from './add-user.service';
import { FormGroup, FormsModule, FormControl, Validators, FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [AddUserService]
})
export class AddUserComponent implements OnInit {
  formAddUser: FormGroup;
  formControl: FormControl;
  pw;
  constructor(private addUserService: AddUserService, private fb: FormBuilder) { }
  ngOnInit() {
    this.formAddUser = this.fb.group({
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      passwordRepeat: ['', Validators.required]
    }, {
        validator: this.MatchPassword // your validation method
      })
  }

  onAddUser(newUser) {
    this.addUserService.addUser(newUser.value)
      .then(result => {
        window.alert("Tạo mới tài khoản thành công");
        this.ngOnInit();
      })
      .catch(err => console.log(err));
  }

  MatchPassword(AC: AbstractControl) {
    let password = AC.get('password').value; // to get value in input tag
    let confirmPassword = AC.get('passwordRepeat').value; // to get value in input tag
    if (password != confirmPassword) {
      AC.get('passwordRepeat').setErrors({ MatchPassword: true })
    } else {
      return null
    }
  }
}