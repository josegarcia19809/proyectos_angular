import { Component, computed, signal } from '@angular/core';
import { USUARIOS_FALSOS } from '../../usuarios-falsos';

const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
@Component({
  selector: 'app-usuario',
  imports: [],
  templateUrl: './usuario.html',
  styleUrl: './usuario.css',
})
export class Usuario {
  usuarioSeleccionado = signal(USUARIOS_FALSOS[indiceAleatorio]);

  // get rutaImagen() {
  //   return 'usuarios/' + this.usuarioSeleccionado.avatar;
  // }

  rutaImagen = computed(() => 'usuarios/' + this.usuarioSeleccionado().avatar);

  alSeleccionarUsuario() {
    const indiceAleatorio = Math.floor(Math.random() * USUARIOS_FALSOS.length);
    this.usuarioSeleccionado.set(USUARIOS_FALSOS[indiceAleatorio]);
  }
}
