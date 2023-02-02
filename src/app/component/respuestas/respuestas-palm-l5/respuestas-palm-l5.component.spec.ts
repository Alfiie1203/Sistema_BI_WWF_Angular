import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL5Component } from './respuestas-palm-l5.component';

describe('RespuestasPalmL5Component', () => {
  let component: RespuestasPalmL5Component;
  let fixture: ComponentFixture<RespuestasPalmL5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
