import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarLoginComponent } from './snack-bar-login.component';

describe('SnackBarLoginComponent', () => {
  let component: SnackBarLoginComponent;
  let fixture: ComponentFixture<SnackBarLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackBarLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
