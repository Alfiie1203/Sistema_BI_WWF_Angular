import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL3Component } from './respuestas-palm-l3.component';

describe('RespuestasPalmL3Component', () => {
  let component: RespuestasPalmL3Component;
  let fixture: ComponentFixture<RespuestasPalmL3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
