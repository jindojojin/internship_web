import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlanReportFormComponent } from './new-plan-report-form.component';

describe('NewPlanReportFormComponent', () => {
  let component: NewPlanReportFormComponent;
  let fixture: ComponentFixture<NewPlanReportFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPlanReportFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlanReportFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
