import { Component, OnInit } from '@angular/core';
import { LecturerListService } from './lecturer-list.service'
import { myWebsiteDomain } from '../../objects/appConfig';

@Component({
  selector: 'app-lecturer-list',
  templateUrl: './lecturer-list.component.html',
  styleUrls: ['./lecturer-list.component.css'],
  providers: [LecturerListService]
})
export class LecturerListComponent implements OnInit {
  lecturers: Object;
  constructor(private lecturerListService: LecturerListService) { }
  server= myWebsiteDomain;
  ngOnInit() {
    this.lecturerListService.getList()
      .then(res => {
        // console.log(res);
        this.lecturers = res;
      })
      .catch(err => console.log(err));
  }

}
