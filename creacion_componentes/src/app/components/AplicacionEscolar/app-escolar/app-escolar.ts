import { Component } from '@angular/core';
import { Bienvenida } from '../bienvenida/bienvenida';
import { MateriaFavorita } from '../materia-favorita/materia-favorita';
import { Cierre } from '../cierre/cierre';

@Component({
  selector: 'app-app-escolar',
  imports: [Bienvenida, MateriaFavorita, Cierre],
  templateUrl: './app-escolar.html',
  styleUrl: './app-escolar.css',
})
export class AppEscolar {}
