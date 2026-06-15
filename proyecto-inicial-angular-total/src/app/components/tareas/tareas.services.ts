import { type NuevaTareaInfo } from './tarea/tarea.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TareasServices {
  private tareasFalses = [
    {
      id: 't1',
      idUsuario: 'u1',
      titulo: 'Dominar Angular',
      resumen: 'Apreder todas las características básicas y avanzasAngular cómo apicarlas.',
      expira: '2025-01-01',
    },
    {
      id: 't2',
      idUsuario: 'u3',
      titulo: 'Crear el primer prototipo',
      resumen: 'Crear el primer prototipo del sitio web de la tienda',
      expira: '2025-11-05',
    },
    {
      id: 't3',
      idUsuario: 'u3',
      titulo: 'Preparar la plantilla del carrito',
      resumen: 'Preparar y describir una plantilla de carrito de compras de la tienda online',
      expira: '2025-05-16',
    },
  ];

  obtenerTareasDeUsuario(idUsuario: string) {
    return this.tareasFalses.filter((tarea) => tarea.idUsuario === idUsuario);
  }

  agregarTarea(infoDeTarea: NuevaTareaInfo, idUsuario: string) {
    this.tareasFalses.push({
      expira: infoDeTarea.fecha,
      idUsuario: idUsuario,
      resumen: infoDeTarea.resumen,
      id: new Date().getTime().toString(),
      titulo: infoDeTarea.titulo,
    });
  }

  eliminarTarea(id: string) {
    this.tareasFalses = this.tareasFalses.filter((tarea) => tarea.id !== id);
  }
}
