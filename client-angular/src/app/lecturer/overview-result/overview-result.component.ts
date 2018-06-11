import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../lecturer.service';

@Component({
  selector: 'app-overview-result',
  templateUrl: './overview-result.component.html',
  styleUrls: ['./overview-result.component.css']
})
export class OverviewResultComponent implements OnInit {
  markTable: any[] = [];

  constructor(private lecturerService: LecturerService) { }

  ngOnInit() {
    this.lecturerService.getMarkTable()
      .then(r => { console.log(r); this.markTable = r })
      .catch(e => this.markTable = null)
    console.log(this.markTable);

  }

}
