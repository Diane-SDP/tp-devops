import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';
import { CounterService } from './counter/counter.service';
import * as os from 'os';

@Controller()
export class AppController {
  constructor(private readonly counterService: CounterService) {}

  @Get('ping')
  ping(@Req() req: Request) {
    return os.hostname();
  }

  @Get('stats')
  stats() {
    return {
      totalRequests: this.counterService.get(),
      uptime: process.uptime(),
      instanceId: process.env.INSTANCE_ID || os.hostname(),
    };
  }
}
