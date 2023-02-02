import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestasPalmL1Component } from './respuestas-palm-l1.component';

describe('RespuestasPalmL1Component', () => {
  let component: RespuestasPalmL1Component;
  let fixture: ComponentFixture<RespuestasPalmL1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespuestasPalmL1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespuestasPalmL1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
