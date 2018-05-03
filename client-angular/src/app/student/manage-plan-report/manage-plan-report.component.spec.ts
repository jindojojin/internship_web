import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlanReportComponent } from './manage-plan-report.component';

describe('ManagePlanReportComponent', () => {
  let component: ManagePlanReportComponent;
  let fixture: ComponentFixture<ManagePlanReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagePlanReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagePlanReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
