import { Component, OnInit } from '@angular/core';
import { ManageInternshipTermService } from './manage-internship-term.service';

@Component({
  selector: 'app-manage-internship-term',
  templateUrl: './manage-internship-term.component.html',
  styleUrls: ['./manage-internship-term.component.css'],
  providers: [ManageInternshipTermService]
})
export class ManageInternshipTermComponent implements OnInit {
  terms;

  constructor(private manageInternshipTermService: ManageInternshipTermService) { }

  ngOnInit() {
    this.manageInternshipTermService.getTerms()
      .then(res => {
        this.terms = res;
      })
      .catch(err => console.log(err));
  }

  onSubmit(newTerm) {
    this.manageInternshipTermService.sendNewTerm(newTerm.value)
      .then(result => {
        window.location.reload();
        // console.log(result);
      })
      .catch(err => console.log(err));
  }

  onDelete(termID) {
    this.manageInternshipTermService.DeleteTerm(termID)
      .then(result => {
        window.location.reload();
        // console.log(result);
      })
      .catch(err => console.log(err));
  }
}
