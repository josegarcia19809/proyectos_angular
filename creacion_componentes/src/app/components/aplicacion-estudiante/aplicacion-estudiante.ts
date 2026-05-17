import { Component } from '@angular/core';

type InfoEscolar={
  grupo:string,
  campus:string,
}

@Component({
  selector: 'app-aplicacion-estudiante',
  imports: [],
  templateUrl: './aplicacion-estudiante.html',
  styleUrl: './aplicacion-estudiante.css',
})
export class AplicacionEstudiante {
  nombreEstudiante: string = 'María López';
  calificacion: number = 9;

  materiasFavoritas: string[] = ['Matemáticas', 'Historia', 'Programación'];

  estaInscrita: boolean = true;

  infoEscolar: InfoEscolar = {
    grupo: '9-B',
    campus: 'TES Atlacomulco',
  }
}
