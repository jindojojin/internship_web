import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovePartnerInfoComponent } from './approve-partner-info.component';

describe('ApprovePartnerInfoComponent', () => {
  let component: ApprovePartnerInfoComponent;
  let fixture: ComponentFixture<ApprovePartnerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprovePartnerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovePartnerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
