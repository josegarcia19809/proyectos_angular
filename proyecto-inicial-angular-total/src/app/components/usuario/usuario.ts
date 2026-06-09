import { Component, computed, EventEmitter, input, Input, Output } from '@angular/core';

type UsuarioComponente = {
  id: string;
  avatar: string;
  nombre: string;
};

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input({ required: true }) usuario!: UsuarioComponente;

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
