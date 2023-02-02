import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL4Component } from './respuestas-palm-l4.component';

describe('RespuestasPalmL4Component', () => {
  let component: RespuestasPalmL4Component;
  let fixture: ComponentFixture<RespuestasPalmL4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
