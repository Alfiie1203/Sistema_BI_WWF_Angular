import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasLecheL1Component } from './respuestas-leche-l1.component';

describe('RespuestasLecheL1Component', () => {
  let component: RespuestasLecheL1Component;
  let fixture: ComponentFixture<RespuestasLecheL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasLecheL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasLecheL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
