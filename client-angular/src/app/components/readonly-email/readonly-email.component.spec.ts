import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadonlyEmailComponent } from './readonly-email.component';

describe('ReadonlyEmailComponent', () => {
  let component: ReadonlyEmailComponent;
  let fixture: ComponentFixture<ReadonlyEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadonlyEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadonlyEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
