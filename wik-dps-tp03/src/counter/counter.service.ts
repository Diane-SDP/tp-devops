import { Injectable } from '@nestjs/common';
import { CounterStore } from './counter-store.interface';

@Injectable()
export class CounterService implements CounterStore {
  private counter = 0;

  increment() {
    this.counter++;
  }

  get() {
    return this.counter;
  }
}