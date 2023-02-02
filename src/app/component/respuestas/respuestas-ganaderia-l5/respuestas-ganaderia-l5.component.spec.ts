import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL5Component } from './respuestas-ganaderia-l5.component';

describe('RespuestasGanaderiaL5Component', () => {
  let component: RespuestasGanaderiaL5Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
