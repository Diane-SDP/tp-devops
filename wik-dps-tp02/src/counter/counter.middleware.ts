import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { CounterService } from './counter.service';

@Injectable()
export class CounterMiddleware implements NestMiddleware {
  constructor(private readonly counterService: CounterService) {}

  use(req: Request, res: Response, next: NextFunction) {
    this.counterService.increment();
    next();
  }
}