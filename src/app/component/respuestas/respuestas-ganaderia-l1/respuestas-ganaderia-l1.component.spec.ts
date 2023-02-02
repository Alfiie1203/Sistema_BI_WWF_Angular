import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL1Component } from './respuestas-ganaderia-l1.component';

describe('RespuestasGanaderiaL1Component', () => {
  let component: RespuestasGanaderiaL1Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
