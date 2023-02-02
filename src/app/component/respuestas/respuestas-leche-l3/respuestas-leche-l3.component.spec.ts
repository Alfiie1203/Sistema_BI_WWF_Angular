import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL3Component } from './respuestas-leche-l3.component';

describe('RespuestasLecheL3Component', () => {
  let component: RespuestasLecheL3Component;
  let fixture: ComponentFixture<RespuestasLecheL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
