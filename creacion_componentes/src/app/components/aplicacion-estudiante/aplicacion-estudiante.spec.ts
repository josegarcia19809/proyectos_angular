import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacionEstudiante } from './aplicacion-estudiante';

describe('AplicacionEstudiante', () => {
  let component: AplicacionEstudiante;
  let fixture: ComponentFixture<AplicacionEstudiante>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AplicacionEstudiante],
    }).compileComponents();

    fixture = TestBed.createComponent(AplicacionEstudiante);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
