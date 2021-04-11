import { Component } from '@angular/core';
import {CounterService} from '../services/counter.service';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  currentDate$ = this.services.counterDate$;
  counter: 'Счетчик';
  counterValue = this.services.counterValue$;
  counterValueLesserZero$ = this.services.counterValue$.pipe(map(count => count > 0));
  counterValueMoreZero$ = this.services.counterValue$.pipe(map(count => count < 0));
  constructor(private services: CounterService) {}
  plusOneToCounter(): void {
    this.services.increaseValue();
  }
  minusOneToCounter(): void {
    this.services.decreaseValue();
  }
  makeZero(): void {
    this.services.makeCounterZero();
  }
}
