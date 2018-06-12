import { Component, OnInit } from '@angular/core';
import { ManageUserService } from './manage-user.service';
@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [ManageUserService]
})
export class ManageUserComponent implements OnInit {
  user;
  accounts: Object;
  type: string = "student";
  username;
  uID;
  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.onGetAccounts(this.type);
  }

  onUpdate(userID, formEdit) {
    console.log(userID);
    console.log(formEdit.value);
    this.manageUserService.updateAccount(userID, formEdit.value)
      .then(result => {

      })
      .catch(err => console.log(err));
  }

  onDelete(userID) {
    this.manageUserService.deleteAccount(userID)
      .then(result => {
        this.ngOnInit();
      })
      .catch(err => console.log(err));
  }

  onGetAccounts(type: string) {
    this.type = type;
    this.manageUserService.getAccounts(type)
      .then(res => {
        res.forEach(element => {
          console.log(element);
        });
        this.accounts = res;
      })
      .catch(err => console.log(err));
  }

  setUsername(username, userID) {
    this.username = username;
    this.uID = userID;
  }
}
