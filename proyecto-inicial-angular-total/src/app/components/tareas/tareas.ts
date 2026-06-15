import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from './tarea/tarea';
import { type NuevaTareaInfo } from './tarea/tarea.model';
import { NuevaTarea } from './nueva-tarea/nueva-tarea';
import { TareasServices } from './tareas.services';

@Component({
  selector: 'app-tareas',
  imports: [Tarea, NuevaTarea],
  templateUrl: './tareas.html',
  styleUrl: './tareas.css',
})
export class Tareas {
  @Input({ required: true }) idUsuario!: string;
  @Input({ required: true }) nombre!: string;

  estaAgregandoNuevaTarea = false;

  constructor(private tareasService: TareasServices) {}

  get tareasUsuarioSeleccionado() {
    return this.tareasService.obtenerTareasDeUsuario(this.idUsuario);
  }

  crearTareaNueva() {
    this.estaAgregandoNuevaTarea = true;
  }

  cancelarTareaNueva() {
    this.estaAgregandoNuevaTarea = false;
  }

}
