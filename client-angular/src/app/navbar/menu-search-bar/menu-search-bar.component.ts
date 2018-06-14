import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-menu-search-bar',
  templateUrl: './menu-search-bar.component.html',
  styleUrls: ['./menu-search-bar.component.css']
})
export class MenuSearchBarComponent implements OnInit {
  formSearch: FormGroup;
  @Output() searchBtnPressed= new EventEmitter();
  async onSearchSubmit(typeOfKey) {
    // let typeOfKey = this.formSearch.value.typeOfKey;
    let keySearch = this.formSearch.value.keySearch;
    // this.searchBtnPressed.emit(null);
    await this.router.navigate(['Tim-kiem/cac-bai-dang-thuc-tap/',typeOfKey,keySearch]);
    this.searchBtnPressed.emit(null);
  }

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit() {
    
      this.formSearch = this.fb.group({
        keySearch: ['', Validators.required],
        typeOfKey:Validators.required
      }) 
      this.formSearch.controls['typeOfKey'].setValue('title');    
  }

}
