import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL5Component } from './respuestas-leche-l5.component';

describe('RespuestasLecheL5Component', () => {
  let component: RespuestasLecheL5Component;
  let fixture: ComponentFixture<RespuestasLecheL5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
