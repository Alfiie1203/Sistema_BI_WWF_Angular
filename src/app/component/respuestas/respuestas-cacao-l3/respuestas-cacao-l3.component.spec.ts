import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL3Component } from './respuestas-cacao-l3.component';

describe('RespuestasCacaoL3Component', () => {
  let component: RespuestasCacaoL3Component;
  let fixture: ComponentFixture<RespuestasCacaoL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
