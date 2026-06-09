import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';
import { type UsuarioComponente } from './usuario.model';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input({ required: true }) usuario!: UsuarioComponente;
  @Input({ required: true }) seleccionado!: boolean;

  @Output() seleccion = new EventEmitter<string>();

  get rutaImagen() {
    return 'usuarios/' + this.usuario.avatar;
  }

  alSeleccionarUsuario() {
    this.seleccion.emit(this.usuario.id);
  }
}


//////////////// Signal
// avatar = input.required<string>();
// nombre = input.required<string>();
// seleccion = output<string>();

// rutaImagen = computed(() => {
//   return 'usuarios/' + this.avatar();
// });
