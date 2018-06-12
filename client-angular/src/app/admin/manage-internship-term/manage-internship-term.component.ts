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
      })
      .catch(err => console.log(err));
  }

  onEdit(termID) {
    this.termIDEdit = termID;
  }

  onSubmitEdit(newTermContent) {
    console.log("1");
    this.manageInternshipTermService.updateTerm(this.termIDEdit, newTermContent.value)
    .then(result => {
      this.termIDEdit = null;
      this.ngOnInit();
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
      })
      .catch(err => console.log(err));
  }
}
