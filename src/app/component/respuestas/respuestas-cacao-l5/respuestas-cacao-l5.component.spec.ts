import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL5Component } from './respuestas-cacao-l5.component';

describe('RespuestasCacaoL5Component', () => {
  let component: RespuestasCacaoL5Component;
  let fixture: ComponentFixture<RespuestasCacaoL5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
