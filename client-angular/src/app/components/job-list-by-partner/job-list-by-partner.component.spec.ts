import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobListByPartnerComponent } from './job-list-by-partner.component';

describe('JobListByPartnerComponent', () => {
  let component: JobListByPartnerComponent;
  let fixture: ComponentFixture<JobListByPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobListByPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobListByPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
