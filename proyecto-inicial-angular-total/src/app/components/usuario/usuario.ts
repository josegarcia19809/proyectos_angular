import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input({ required: true }) id!: string;
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;

  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'usuarios/' + this.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.id);
  }
}


//////////////// Signal
// avatar = input.required<string>();
// nombre = input.required<string>();
// seleccion = output<string>();

// rutaImagen = computed(() => {
//   return 'usuarios/' + this.avatar();
// });
