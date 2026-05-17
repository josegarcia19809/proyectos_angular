import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.html',
  styleUrls: ['./counter-page.css'],
})
export class CounterPageComponent {
  counter = 10;
  counterSignal = signal(20)

  increaseBy(value: number) {
    this.counter += value;
    this.counterSignal.update((currentValue) => currentValue + value);
  }

  decreaseBy(value: number) {
    this.counter -= value;
    this.counterSignal.update((currentValue) => currentValue - value);
  }

  reset(){
    this.counter = 0;
    this.counterSignal.set(0);
  }
}
