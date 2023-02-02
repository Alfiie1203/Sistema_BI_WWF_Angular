import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL2Component } from './respuestas-leche-l2.component';

describe('RespuestasLecheL2Component', () => {
  let component: RespuestasLecheL2Component;
  let fixture: ComponentFixture<RespuestasLecheL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
