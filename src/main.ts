import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 7000;
  app.enableCors({
    origin: [
      'http://localhost:4200',
    ],
  });
  await app.listen(port);
  Logger.log(`Server running at localhost:${port}`, 'Server');
}
bootstrap();
