import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://intertechub-internship.onrender.com', // Allow specific origin
    methods: 'GET,POST,PUT,DELETE,OPTIONS', // Allow specific methods
    allowedHeaders: 'Content-Type, Authorization', // Allow specific headers
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
