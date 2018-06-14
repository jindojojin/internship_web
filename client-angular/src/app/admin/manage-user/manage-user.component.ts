import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageUserService } from './manage-user.service';
import { PaginationComponent } from '../../components/pagination/pagination.component';

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
    this.getAccounts(type, 1, this.numberOfRow);
    // this.pagination.createPages();
    // this.pageChanged(1);
  }

  getAccounts(type, start, total) {
    this.manageUserService.getAccounts(type, start, total)
      .then(res => {
        this.accounts = res;
        this.total = this.accounts[0].total;
        this.numberOfPage = Math.ceil(this.total / this.numberOfRow);
        if (this.numberOfPage < 10)
          this.pagination.end = this.numberOfPage;
        this.pagination.createPages();
      })
      .catch(err => console.log(err));
  }

  setUsername(username, userID) {
    this.username = username;
    this.uID = userID;
  }

  // Pagination
  @ViewChild(PaginationComponent) pagination: PaginationComponent;
  numberOfPage; // tổng số trang có thể có
  numberOfRow = 10 // số hàng xuất hiện trong bảng
  total: number; // tổng người dùng => dùng để phân trang 
  currentPage: number; // trang hiện tại
  pageChanged(pageNumber) {
    pageNumber = parseInt(pageNumber);
    this.currentPage = pageNumber;
    let start = (pageNumber - 1) * this.numberOfRow + 1;
    this.getAccounts(this.type, start, this.numberOfRow);
    this.pagination.start = (this.currentPage - 4 < 1) ? 1 : (this.currentPage - 4);
    this.pagination.end = (this.pagination.start + 9 > this.numberOfPage) ? (this.numberOfPage) : (this.pagination.start + 9); // hiển thị lại phân trang
    this.pagination.createPages();

  }

}
