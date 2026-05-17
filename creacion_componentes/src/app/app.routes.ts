import { Routes } from '@angular/router';
import { AppEscolar } from './components/AplicacionEscolar/app-escolar/app-escolar';
import { AplicacionEstudiante } from './components/aplicacion-estudiante/aplicacion-estudiante';
import { AplicacionRestaurante } from './components/aplicacion-restaurante/aplicacion-restaurante';

export const routes: Routes = [
  {
    path: 'escolar',
    component: AppEscolar,
  },

  {
    path: 'estudiante',
    component: AplicacionEstudiante,
  },

  {
    path: 'restaurante',
    component: AplicacionRestaurante,
  },
];
