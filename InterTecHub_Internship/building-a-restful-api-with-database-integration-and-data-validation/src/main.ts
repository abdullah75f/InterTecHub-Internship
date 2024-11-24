// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import { ValidationPipe } from '@nestjs/common';
// import { createServer, IncomingMessage, ServerResponse } from 'http';

// let server: any;

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Enable CORS before app initialization
//   app.enableCors();

//   // Apply global validation pipe
//   app.useGlobalPipes(
//     new ValidationPipe({
//       whitelist: true,
//     }),
//   );

//   await app.init();

//   server = createServer((req: IncomingMessage, res: ServerResponse) => {
//     app.getHttpAdapter().getInstance()(req, res);
//   });
// }

// export default async (req: IncomingMessage, res: ServerResponse) => {
//   if (!server) {
//     await bootstrap();
//   }
//   server.emit('request', req, res);
// };

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { createServer, IncomingMessage, ServerResponse } from 'http';

let server: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
