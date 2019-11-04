import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopLoadComponent } from './pop-load.component';

describe('PopLoadComponent', () => {
  let component: PopLoadComponent;
  let fixture: ComponentFixture<PopLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
