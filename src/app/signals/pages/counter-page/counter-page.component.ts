import { Component, computed, signal } from '@angular/core';


@Component({
  templateUrl: './counter-page.component.html',
  styleUrls: ['./counter-page.component.css']
})
export class CounterPageComponent {

  public counter = signal(10);
  public squareCounter = computed( () => this.counter() * this.counter() );


  increaseBy( value: number ) {

    this.counter.update( current => current + value );

  }

}
