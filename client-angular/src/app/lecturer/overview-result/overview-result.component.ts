import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../lecturer.service';
import { ExcelService } from '../../share/excel.service';

@Component({
  selector: 'app-overview-result',
  templateUrl: './overview-result.component.html',
  styleUrls: ['./overview-result.component.css'],
  providers: [ExcelService]
})
export class OverviewResultComponent implements OnInit {
  markTable: any[] = [];

  constructor(private lecturerService: LecturerService, private excel: ExcelService) { }

  ngOnInit() {
    this.lecturerService.getMarkTable()
      .then(r => { 
        console.log(r); 
        this.markTable = r;
        // this.excel.exportAsExcelFile(r,'danhsach');
      })
      .catch(e => this.markTable = null)
  }
}