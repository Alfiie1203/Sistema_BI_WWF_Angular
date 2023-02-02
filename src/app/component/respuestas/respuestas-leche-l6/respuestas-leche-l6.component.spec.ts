import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL6Component } from './respuestas-leche-l6.component';

describe('RespuestasLecheL6Component', () => {
  let component: RespuestasLecheL6Component;
  let fixture: ComponentFixture<RespuestasLecheL6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
