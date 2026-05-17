import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaFavorita } from './materia-favorita';

describe('MateriaFavorita', () => {
  let component: MateriaFavorita;
  let fixture: ComponentFixture<MateriaFavorita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MateriaFavorita],
    }).compileComponents();

    fixture = TestBed.createComponent(MateriaFavorita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
