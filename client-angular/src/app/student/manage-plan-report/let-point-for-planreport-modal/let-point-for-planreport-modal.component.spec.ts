import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetPointForPlanreportModalComponent } from './let-point-for-planreport-modal.component';

describe('LetPointForPlanreportModalComponent', () => {
  let component: LetPointForPlanreportModalComponent;
  let fixture: ComponentFixture<LetPointForPlanreportModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetPointForPlanreportModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetPointForPlanreportModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
