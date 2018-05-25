import { Component, OnInit } from '@angular/core';
import { ManageUserService } from './manage-user.service';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css'],
  providers: [ManageUserService]
})
export class ManageUserComponent implements OnInit {
  accounts: Object;
  type: string = "student";

  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.onGetAccounts(this.type);
  }

  onDelete(userID) {
    console.log(userID);
    this.manageUserService.deleteAccount(userID)
      .then(result => {
        console.log(result);
        // window.location.reload();
      })
      .catch(err => console.log(err));
  }

  onGetAccounts(type: string) {
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
