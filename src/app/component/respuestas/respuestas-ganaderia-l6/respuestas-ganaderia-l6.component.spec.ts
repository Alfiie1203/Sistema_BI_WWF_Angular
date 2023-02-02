import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL6Component } from './respuestas-ganaderia-l6.component';

describe('RespuestasGanaderiaL6Component', () => {
  let component: RespuestasGanaderiaL6Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
