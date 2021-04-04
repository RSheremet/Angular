import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterValue = 0;
  constructor() {}
  increaseValue(): void {
    this.counterValue++;
  }
  decreaseValue(): void {
    this.counterValue--;
  }
}
