import { Component, computed, input, Input } from '@angular/core';

@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) nombre!: string;

  get rutaImagen() {
    return 'usuarios/' + this.avatar;
  }

  //////////////// Signal
  // avatar = input.required<string>();
  // nombre = input.required<string>();
  //
  // rutaImagen = computed(() => {
  //   return 'usuarios/' + this.avatar();
  // });
  alSeleccionarUsuario() {}
}
