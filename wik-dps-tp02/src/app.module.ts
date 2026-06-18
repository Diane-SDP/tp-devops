import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { CounterService } from './counter/counter.service';
import { CounterMiddleware } from './counter/counter.middleware';

@Module({
  controllers: [AppController],
  providers: [CounterService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CounterMiddleware).forRoutes('*');
  }
}