import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL2Component } from './respuestas-ganaderia-l2.component';

describe('RespuestasGanaderiaL2Component', () => {
  let component: RespuestasGanaderiaL2Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
