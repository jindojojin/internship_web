import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlanReportComponent } from './list-plan-report.component';

describe('ListPlanReportComponent', () => {
  let component: ListPlanReportComponent;
  let fixture: ComponentFixture<ListPlanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPlanReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
