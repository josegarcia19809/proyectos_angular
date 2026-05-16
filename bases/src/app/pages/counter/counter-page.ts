import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  template: `
    <h1>Hola mundo {{ 1 + 2 }}</h1>
    <p>Counter: {{ counter }}</p>
    <button (click)="increaseBy(1)" )>+1</button>
  `,
})
export class CounterPageComponent {
  counter = 10;

  increaseBy(value: number) {
    this.counter += value;
  }
}
