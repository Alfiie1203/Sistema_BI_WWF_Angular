import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL3Component } from './respuestas-ganaderia-l3.component';

describe('RespuestasGanaderiaL3Component', () => {
  let component: RespuestasGanaderiaL3Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
