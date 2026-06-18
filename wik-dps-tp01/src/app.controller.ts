import { Controller, Get, Req } from '@nestjs/common';
import type { Request } from 'express';

@Controller()
export class AppController {

  @Get('ping')
  ping(@Req() req: Request) {
    return req.headers;
  }
}