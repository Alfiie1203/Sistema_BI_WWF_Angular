import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL2Component } from './respuestas-palm-l2.component';

describe('RespuestasPalmL2Component', () => {
  let component: RespuestasPalmL2Component;
  let fixture: ComponentFixture<RespuestasPalmL2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
