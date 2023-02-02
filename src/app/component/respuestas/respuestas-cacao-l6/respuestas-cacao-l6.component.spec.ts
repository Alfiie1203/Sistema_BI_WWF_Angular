import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL6Component } from './respuestas-cacao-l6.component';

describe('RespuestasCacaoL6Component', () => {
  let component: RespuestasCacaoL6Component;
  let fixture: ComponentFixture<RespuestasCacaoL6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
