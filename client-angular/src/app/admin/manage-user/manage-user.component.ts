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
  total: number;
  constructor(private manageUserService: ManageUserService) { }

  ngOnInit() {
    this.onGetAccounts(this.type);
  }

  onUpdate(userID, formEdit) {
    formEdit.value.userID = userID;
    this.manageUserService.updateAccount(formEdit.value)
      .then(result => {
        document.getElementById("closeModal" + userID).click();
        window.alert("Cập nhập thành công!");
        this.ngOnInit();
      })
      .catch(err => console.log(err));
  }

  onDelete(userID) {
    this.manageUserService.deleteAccount(userID)
      .then(result => {
        window.alert("Xóa thành công!");
        this.ngOnInit();
      })
      .catch(err => console.log(err));
  }

  onGetAccounts(type: string) {
    this.type = type;
    this.manageUserService.getAccounts(type, 1, 10)
      .then(res => {
        this.accounts = res;
        this.total = this.accounts[0].total;
        this.ispaging = true;
        this.maxPages = Math.ceil(this.total / this.itemsPerPage);
        console.log(this.maxPages);
      })
      .catch(err => console.log(err));
  }

  setUsername(username, userID) {
    this.username = username;
    this.uID = userID;
  }

  // Pagination
  page;
  itemsPerPage: number = 10;
  maxPages;
  currentPage = 1;
  ispaging = false;
  pageChanged(event) {
    this.page = event.page;
    this.itemsPerPage = event.itemsPerPage
    this.loadPage(this.page, this.itemsPerPage);
  }

  loadPage(page: number, rows: number) {
    this.manageUserService.getAccounts(this.type, (page - 1) * this.itemsPerPage + 1, rows)
      .then(res => {
        this.accounts = res;
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
