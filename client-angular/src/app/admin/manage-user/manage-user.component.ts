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

  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.manageUserService.getAccounts()
      .then(res => {
        this.accounts = res;
      })
      .catch(err => console.log(err));
  }

  onDelete(userID) {
    this.manageUserService.deleteAccount(userID)
      .then(result => {
        window.location.reload();
      })
      .catch(err => console.log(err));
  }
}
