import { Component, OnInit } from '@angular/core';
import { LecturerService } from '../lecturer.service';
import { ExcelService } from '../../share/excel.service';
import { MarkTable, PERSONS } from '../../objects/appConfig';
import { getCookie } from '../../objects/Cookiee';

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
        this.markTable = r;
        // var test: MarkTable[] =[
        //   {'ten':'1','số thứ tự':'213213'},
        //   {'ten':'2','số thứ tự':'fadfdfasdfasdf'}
        // ]
        // this.excel.exportAsExcelFile(test,'danhsach');
      })
      .catch(e => this.markTable = null)
  }

  exportExelFile() {
    let table = [];
    let i = 0;
    this.markTable.forEach(element => {
      i++;
      let x = {};
      x['STT'] = i;
      x['MSSV'] = element['student.studentCode'];
      x['Họ và tên'] = element['student.name'];
      x['Ngày sinh'] = element['student.dateOfBirth'];
      x['Lớp khóa học'] = element['student.class'];
      x['Tiêu đề báo cáo'] = element.report['title'];
      x['Điểm'] = element.report['lecturer_student.mark'];
      x['Ghi chú'] = element.report['lecturer_student.comment'];
      table.push(x);
    });
    this.excel.exportAsExcelFile(table, 'Bang_diem_' + getCookie("nickname"));
  }
}