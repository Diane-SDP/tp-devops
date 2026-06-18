import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PING_LISTEN_PORT || 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}
bootstrap();
