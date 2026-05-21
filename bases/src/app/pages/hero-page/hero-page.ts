import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css',
})
export class HeroPage {
  name = signal('Ironman');
  age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  heroDescription = computed(() => {
    return `${this.name()} - ${this.age()}`;
  });

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  chageAge() {
    this.age.set(60);
  }
}
