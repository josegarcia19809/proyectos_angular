import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Encabezado } from './components/encabezado/encabezado';
import { Usuario } from './components/usuario/usuario';
import { USUARIOS_FALSOS } from './usuarios-falsos';
import { Tareas } from './components/tareas/tareas';

@Component({
  selector: 'app-root',
  imports: [Encabezado, Usuario, Tareas],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('proyecto-inicial-angular-total');
  usuarios = USUARIOS_FALSOS;
  idUsuarioSeleccionado?: string;

  get usuarioSeleccionado() {
    return this.usuarios.find((usuario) => usuario.id === this.idUsuarioSeleccionado)!;
  }

  alSeleccionarUsuario(id: string) {
    this.idUsuarioSeleccionado = id;
  }
}
