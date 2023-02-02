import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL4Component } from './respuestas-cacao-l4.component';

describe('RespuestasCacaoL4Component', () => {
  let component: RespuestasCacaoL4Component;
  let fixture: ComponentFixture<RespuestasCacaoL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
