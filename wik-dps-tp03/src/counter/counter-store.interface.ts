export interface CounterStore {
  increment(): void;
  get(): number;
}