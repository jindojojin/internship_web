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

  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.onGetAccounts(this.type);
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

}
