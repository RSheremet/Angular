import { Component } from '@angular/core';
import {CounterService} from '../services/counter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  counter: 'Счетчик';
  constructor(private services: CounterService) {}
  plusOneToCounter(): void {
    this.services.increaseValue();
  }
  minusOneToCounter(): void {
    if (this.getCounterValue() > 0) {
      this.services.decreaseValue();
    }
  }
  getCounterValue(): number {
    return this.services.counterValue;
  }
}
