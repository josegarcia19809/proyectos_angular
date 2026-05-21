import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { HeroPage } from './pages/hero-page/hero-page';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList],
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('José Luis G');
}
