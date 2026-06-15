import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type TareaComponente } from './tarea.model';

@Component({
  selector: 'app-tarea',
  imports: [],
  templateUrl: './tarea.html',
  styleUrl: './tarea.css',
})
export class Tarea {
  @Input({ required: true }) tarea!: TareaComponente;
  @Output() terminada = new EventEmitter<string>();


  alCompletarTarea(){
    this.terminada.emit(this.tarea.id);
  }

}
