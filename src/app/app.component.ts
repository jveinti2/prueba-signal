import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prueba-signal';
  // countSuma = 0;
  constructor() {
    effect(() => {
      console.log('countSumaEfect: ' + this.countSuma());
    });
    effect(() => {
      if (this.count() == 10) {
        console.log('countEfect: ' + this.count());
      }
    });
  }

  //signals
  count = signal(1);
  doubleCount = computed(() => this.count() * 2);
  countSuma = signal(2);
  count3 = signal(3);

  //methods
  triggerChanges() {
    this.countSuma.set(this.countSuma() + 1);
  }
  triggerChanges2() {
    this.count.update((prev) => prev + 1);
  }

  calculoComputed = computed(() => {
    return this.count() >= 10;
  });
}
