import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionRestaurante } from './aplicacion-restaurante';

describe('AplicacionRestaurante', () => {
  let component: AplicacionRestaurante;
  let fixture: ComponentFixture<AplicacionRestaurante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacionRestaurante],
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacionRestaurante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
