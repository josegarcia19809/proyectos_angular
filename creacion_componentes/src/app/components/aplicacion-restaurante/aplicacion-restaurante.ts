import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
type InfoRestaurante = {
  calle: string;
  ciudad: string;
};

@Component({
  selector: 'app-aplicacion-restaurante',
  imports: [CommonModule],
  templateUrl: './aplicacion-restaurante.html',
  styleUrl: './aplicacion-restaurante.css',
})
export class AplicacionRestaurante {
  nombreRestaurante: string = 'La Pizzeria Angular';
  platilloEspecial: string = 'Pizza de Peperoni';
  precio: number = 150;
  disponibilidad: boolean = false;

  infoRestaurante: InfoRestaurante = {
    calle: 'Av. Principal 123',
    ciudad: 'Atlacomulco',
  };
}
