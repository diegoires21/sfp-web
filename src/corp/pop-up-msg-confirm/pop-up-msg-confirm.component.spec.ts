import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpMsgConfirmComponent } from './pop-up-msg-confirm.component';

describe('PopUpMsgConfirmComponent', () => {
  let component: PopUpMsgConfirmComponent;
  let fixture: ComponentFixture<PopUpMsgConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpMsgConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpMsgConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
