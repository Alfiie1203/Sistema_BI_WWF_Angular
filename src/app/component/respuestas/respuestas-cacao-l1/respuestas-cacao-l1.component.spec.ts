import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasCacaoL1Component } from './respuestas-cacao-l1.component';

describe('RespuestasCacaoL1Component', () => {
  let component: RespuestasCacaoL1Component;
  let fixture: ComponentFixture<RespuestasCacaoL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasCacaoL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasCacaoL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
