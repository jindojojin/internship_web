import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPartnerInfoToAdminComponent } from './send-partner-info-to-admin.component';

describe('SendPartnerInfoToAdminComponent', () => {
  let component: SendPartnerInfoToAdminComponent;
  let fixture: ComponentFixture<SendPartnerInfoToAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendPartnerInfoToAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPartnerInfoToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
