import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  constructor() {
  }

  multiplication(a: number, b: number) {
    return a * b;
  }

  substract(a: number, b: number) {
    return a - b;
  }

  divide(a: number, b: number) {
    return a / b;
  }

  plus(a: number, b: number) {
    return a + b;
  }
}
