import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL4Component } from './respuestas-leche-l4.component';

describe('RespuestasLecheL4Component', () => {
  let component: RespuestasLecheL4Component;
  let fixture: ComponentFixture<RespuestasLecheL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
