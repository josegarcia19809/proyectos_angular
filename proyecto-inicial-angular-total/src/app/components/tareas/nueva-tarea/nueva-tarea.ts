import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../tarea/tarea.model';
import { TareasServices } from '../tareas.services';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Input({ required: true }) idUsuario!: string;
  @Output() cerrar = new EventEmitter<void>();
  // @Output() agregarTarea = new EventEmitter<NuevaTareaInfo>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';

  private tareasService = inject(TareasServices);

  alCancelarTarea() {
    this.cerrar.emit();
  }

  alEnviar() {
    this.tareasService.agregarTarea(
      {
        titulo: this.tituloIngresado,
        resumen: this.resumenIngresado,
        fecha: this.fechaIngresada,
      },
      this.idUsuario,
    );
    this.cerrar.emit();
  }
}
