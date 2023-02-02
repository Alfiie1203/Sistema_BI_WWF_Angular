import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL2Component } from './respuestas-cacao-l2.component';

describe('RespuestasCacaoL2Component', () => {
  let component: RespuestasCacaoL2Component;
  let fixture: ComponentFixture<RespuestasCacaoL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
