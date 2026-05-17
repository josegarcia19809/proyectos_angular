import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bienvenida',
  imports: [CommonModule],
  templateUrl: './bienvenida.html',
  styleUrl: './bienvenida.css',
})
export class Bienvenida {
  colors = {
    indianRed: '#CD5C5C',
    darkSalmon: '#E9967A',
    white: '#FFFFFF',
    black: '#000000',
  };

  headerStyle = {
    backgroundColor: this.colors.indianRed,
    color: this.colors.white,
    padding: '1.5rem',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  };
}
