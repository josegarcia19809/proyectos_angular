import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { type TareaComponente } from './tarea.model';
import { Tarjeta } from '../../compartida/tarjeta/tarjeta';
import { DatePipe } from '@angular/common';
import { TareasServices } from '../tareas.services';

@Component({
  selector: 'app-tarea',
  imports: [Tarjeta, DatePipe],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  @Input({ required: true }) tarea!: TareaComponente;
  // @Output() terminada = new EventEmitter<string>();

  private tareaService = inject(TareasServices);

  alCompletarTarea() {
    this.tareaService.eliminarTarea(this.tarea.id);
  }
}
