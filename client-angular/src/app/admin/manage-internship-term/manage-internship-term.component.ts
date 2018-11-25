import { Component, OnInit } from '@angular/core';
import { ManageInternshipTermService } from './manage-internship-term.service';

@Component({
  selector: 'app-manage-internship-term',
  templateUrl: './manage-internship-term.component.html',
  styleUrls: ['./manage-internship-term.component.css'],
  providers: [ManageInternshipTermService]
})
export class ManageInternshipTermComponent implements OnInit {
  terms: Object;
  termIDEdit: number;
  constructor(private manageInternshipTermService: ManageInternshipTermService) { }

  ngOnInit() {
    this.manageInternshipTermService.getTerms()
      .then(res => {
        this.terms = res;
      })
      .catch(err => console.log(err));
  }

  onCreate(newTerm) {
    this.manageInternshipTermService.sendNewTerm(newTerm.value)
      .then(result => {
        this.ngOnInit();
        window.alert('Tạo mới đợt thực tập thành công');
      })
      .catch(err => console.log(err));
  }

  onEdit(termID) {
    this.termIDEdit = termID;
  }

  onSubmitEdit(newTermContent) {
    this.manageInternshipTermService.updateTerm(this.termIDEdit, newTermContent.value)
      .then(result => {
        this.termIDEdit = null;
        this.ngOnInit();
        window.alert('Chỉnh sửa đợt thực tập thành công');
      })
      .catch(err => console.log(err));
  }

  onCancel() {
    this.termIDEdit = null;
    this.ngOnInit();
  }

  onDelete(termID) {
    this.manageInternshipTermService.deleteTerm(termID)
      .then(result => {
        this.ngOnInit();
        window.alert('Xóa đợt thực tập thành công');
      })
      .catch(err => console.log(err));
  }
}
