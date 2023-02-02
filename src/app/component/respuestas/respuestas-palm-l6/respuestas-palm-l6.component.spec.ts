import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL6Component } from './respuestas-palm-l6.component';

describe('RespuestasPalmL6Component', () => {
  let component: RespuestasPalmL6Component;
  let fixture: ComponentFixture<RespuestasPalmL6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
