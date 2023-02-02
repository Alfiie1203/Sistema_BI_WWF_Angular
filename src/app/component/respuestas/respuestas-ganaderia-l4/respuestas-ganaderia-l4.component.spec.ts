import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasGanaderiaL4Component } from './respuestas-ganaderia-l4.component';

describe('RespuestasGanaderiaL4Component', () => {
  let component: RespuestasGanaderiaL4Component;
  let fixture: ComponentFixture<RespuestasGanaderiaL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasGanaderiaL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasGanaderiaL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
