import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStudentFollowMeComponent } from './list-student-follow-me.component';

describe('ListStudentFollowMeComponent', () => {
  let component: ListStudentFollowMeComponent;
  let fixture: ComponentFixture<ListStudentFollowMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStudentFollowMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStudentFollowMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
