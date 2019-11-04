import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManterPessoaComponent } from './manter-pessoa.component';

describe('ManterPessoaComponent', () => {
  let component: ManterPessoaComponent;
  let fixture: ComponentFixture<ManterPessoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManterPessoaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManterPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
