import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createServer, IncomingMessage, ServerResponse } from 'http';

// Vercel handler
let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);

  // Enable CORS if needed
  app.enableCors();

  await app.init();
  server = createServer((req: IncomingMessage, res: ServerResponse) => {
    app.getHttpAdapter().getInstance()(req, res);
  });
}
bootstrap();

export default (req: IncomingMessage, res: ServerResponse) => {
  if (!server) {
    bootstrap().then(() => server.emit('request', req, res));
  } else {
    server.emit('request', req, res);
  }
};
