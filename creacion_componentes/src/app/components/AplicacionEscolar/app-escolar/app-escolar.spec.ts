import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEscolar } from './app-escolar';

describe('AppEscolar', () => {
  let component: AppEscolar;
  let fixture: ComponentFixture<AppEscolar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppEscolar],
    }).compileComponents();

    fixture = TestBed.createComponent(AppEscolar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
