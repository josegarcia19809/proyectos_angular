import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NuevaTareaInfo } from '../tarea/tarea.model';

@Component({
  selector: 'app-nueva-tarea',
  imports: [FormsModule],
  templateUrl: './nueva-tarea.html',
  styleUrl: './nueva-tarea.css',
})
export class NuevaTarea {
  @Output() cancelarTarea = new EventEmitter<void>();
  @Output() agregarTarea = new EventEmitter<NuevaTareaInfo>();
  tituloIngresado = '';
  resumenIngresado = '';
  fechaIngresada = '';

  alCancelarTarea() {
    this.cancelarTarea.emit();
  }

  alEnviar() {
    this.agregarTarea.emit({
      titulo: this.tituloIngresado,
      resumen: this.resumenIngresado,
      fecha: this.fechaIngresada,
    });
  }
}
